import './RangePicker.less';

import React, {Component} from 'react';
import classNames from 'classnames';
import moment from 'moment';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';


function getShowDateFromValue(value) {
  const [start, end] = value;
  // value could be an empty array, then we should not reset showDate
  if (!start && !end) {
    return;
  }
  const newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
  return [start, newEnd];
}

function formatValue(value, format) {
  return value && value.format(format) || '';
}

function pickerValueAdapter(value) {
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value, value.clone().add(1, 'month')];
}

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(i => !i);
  }
  return false;
}

class RangePicker extends Component {
  static defaultProps = {
    prefixCls: 'ant-calendar',
    allowClear: true,
    showToday: false,
  };

  picker = React.createRef()

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue || [];
    const pickerValue = !value || isEmptyArray(value) ? props.defaultValue : value;
    this.state = {
      value,
      showDate: pickerValueAdapter(pickerValue || moment()),
      open: props.open,
      hoverValue: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const state = this.state;
      const value = nextProps.value || [];
      this.setState({
        value,
        showDate: getShowDateFromValue(value) || state.showDate,
      })
    }
    if ('open' in nextProps) {
      this.setState({
        open: nextProps.open,
      });
    }
  }

  clearSelection = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({value: []});
    this.handleChange([]);
  }

  clearHoverValue = () => this.setState({hoverValue: []});

  handleChange = value => {
    const props = this.props;
    if (!('value' in props)) {
      this.setState(({showDate}) => ({
        value,
        showDate: getShowDateFromValue(value) || showDate,
      }))
    }
    props.onChange(value, [
      formatValue(value[0], props.format),
      formatValue(value[1], props.format),
    ]);
  }

  handleOpenChange = open => {
    if (!('open' in this.props)) {
      this.setState({open});
    }

    if (open === false) {
      this.clearHoverValue();
    }

    const {onOpenChange} = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
  }

  handleShowDateChange = showDate => this.setState({showDate});

  handleHoverChange = hoverValue => this.setState({hoverValue});

  handleRangeMouseLeave = () => {
    if (this.state.open) {
      this.clearHoverValue();
    }
  }

  handleCalendarInputSelect = value => {
    if (!value[0]) {
      return;
    }
    this.setState(({showDate}) => ({
      value,
      showDate: getShowDateFromValue(value) || showDate,
    }));
  }

  handleRangeClick = value => {
    if (typeof value === 'function') {
      value = value();
    }

    this.setValue(value, true);

    const {onOk} = this.props;
    if (onOk) {
      onOk(value);
    }
  }

  setValue(value, hidePanel) {
    this.handleChange(value);
    if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
      this.setState({open: false});
    }
  }

  focus() {
    this.picker.focus();
  }

  blur() {
    this.picker.blur();
  }

  renderFooter = ()=>{
    return null;
  }

  render() {
    const {state, props} = this;
    const {value, showDate, hoverValue, open} = state;
    const {showTime, ranges,prefixCls,format} = props;

    const calendarClassName = classNames({
      [`${prefixCls}-time`]: showTime,
      [`${prefixCls}-range-with-ranges`]: ranges,
    });

    let pickerChangeHandler = {
      onChange: this.handleChange,
    };
    let calendarProps = {
      onOk: this.handleChange,
    };
    if (props.timePicker){
      pickerChangeHandler.onChange = changedValue => this.handleChange(changedValue);
    }
    else{
      calendarProps = {};
    }

    if ('mode' in props) {
      calendarProps.mode = props.mode;
    }

    const calendar = (
      <RangeCalendar
        prefixCls={prefixCls}
        value={showDate}
        format={format}
        onValueChange={this.handleShowDateChange}
        hoverValue={hoverValue}
        onHoverChange={this.handleHoverChange}
        onInputSelect={this.handleCalendarInputSelect}
        renderFooter={this.renderFooter}
      />
    );

    const input = ({value}) => {

      const start = value[0];
      const end = value[1];
      return (
        <span className={"ant-calendar-picker-input ant-input"}>
          <input
            readOnly
            value={(start && start.format(props.format)) || ''}
            placeholder={'开始时间'}
            className={`${prefixCls}-range-picker-input`}
            tabIndex={-1}
          />
          <span className={`${prefixCls}-range-picker-separator`}> ~ </span>
          <input
            readOnly
            value={(end && end.format(props.format)) || ''}
            placeholder={'结束时间'}
            className={`${prefixCls}-range-picker-input`}
            tabIndex={-1}
          />
          {(!props.disabled && props.allowClear && value && (value[0] || value[1]))&&<span className={`${prefixCls}-picker-clear`} onClick={this.clearSelection}/>}
          <span className={`${prefixCls}-picker-icon`} />
        </span>
      );
    };

    return (
      <div
        ref={this.picker}
        className={"ant-calendar-picker"}
        tabIndex={props.disabled ? -1 : 0}
      >
        <RcDatePicker
          calendar={calendar}
          value={value}
          open={open}
          onOpenChange={this.handleOpenChange}
          prefixCls={`${prefixCls}-picker-container`}
        >
          {input}
        </RcDatePicker>
      </div>
    )
  }
}

export default RangePicker
