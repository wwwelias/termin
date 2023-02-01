import React, { Component } from "react";
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
import "./CalenderStyles.css";


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      eventMoveHandling : "Disabled",
      businessBeginsHour: 9,
      businessEndsHour: 18,
      heightSpec: "BusinessHoursNoScroll",
      onBeforeHeaderRender: (args) => {
        args.header.html = args.header.start.toString("d MMMM");
      },
    };
    this.calendarRef = React.createRef();
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  EventClicked = (args) => {
      alert("Du hast das Event mit der ID " + args.e.id() + " angeklickt! Dieses Event hat den Titel " + args.e.text() + ".");
      this.calendar.update({
        events: [
          {
        id: 194,
        text: "11:00 - 11:30",
        start: "2023-01-18T11:00:00",
        end: "2023-01-18T11:30:00",
        backColor: "#0d6efd",
        fontColor: "white",
        cssClass: "event"}
      ]
      });
  }

  events = [];

  componentDidMount() {
    
    // load event data
    this.calendar.update({
      events: [
        {
          id: 1,
          text: "11:30 - 12:00",
          start: "2023-01-01T11:30:00",
          end: "2023-01-01T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 2,
          text: "11:00 - 11:30",
          start: "2023-01-01T11:00:00",
          end: "2023-01-01T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 3,
          text: "12:30 - 13:00",
          start: "2023-01-01T12:30:00",
          end: "2023-01-01T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 4,
          text: "12:00 - 12:30",
          start: "2023-01-01T12:00:00",
          end: "2023-01-01T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 5,
          text: "13:30 - 14:00",
          start: "2023-01-01T13:30:00",
          end: "2023-01-01T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 6,
          text: "13:00 - 13:30",
          start: "2023-01-01T13:00:00",
          end: "2023-01-01T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 7,
          text: "14:30 - 15:00",
          start: "2023-01-01T14:30:00",
          end: "2023-01-01T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 8,
          text: "14:00 - 14:30",
          start: "2023-01-01T14:00:00",
          end: "2023-01-01T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 9,
          text: "15:30 - 16:00",
          start: "2023-01-01T15:30:00",
          end: "2023-01-01T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 10,
          text: "15:00 - 15:30",
          start: "2023-01-01T15:00:00",
          end: "2023-01-01T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 11,
          text: "16:30 - 17:00",
          start: "2023-01-01T16:30:00",
          end: "2023-01-01T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 12,
          text: "16:00 - 16:30",
          start: "2023-01-01T16:00:00",
          end: "2023-01-01T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 13,
          text: "11:30 - 12:00",
          start: "2023-01-02T11:30:00",
          end: "2023-01-02T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 14,
          text: "11:00 - 11:30",
          start: "2023-01-02T11:00:00",
          end: "2023-01-02T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 15,
          text: "12:30 - 13:00",
          start: "2023-01-02T12:30:00",
          end: "2023-01-02T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 16,
          text: "12:00 - 12:30",
          start: "2023-01-02T12:00:00",
          end: "2023-01-02T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 17,
          text: "13:30 - 14:00",
          start: "2023-01-02T13:30:00",
          end: "2023-01-02T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 18,
          text: "13:00 - 13:30",
          start: "2023-01-02T13:00:00",
          end: "2023-01-02T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 19,
          text: "14:30 - 15:00",
          start: "2023-01-02T14:30:00",
          end: "2023-01-02T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 20,
          text: "14:00 - 14:30",
          start: "2023-01-02T14:00:00",
          end: "2023-01-02T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 21,
          text: "15:30 - 16:00",
          start: "2023-01-02T15:30:00",
          end: "2023-01-02T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 22,
          text: "15:00 - 15:30",
          start: "2023-01-02T15:00:00",
          end: "2023-01-02T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 23,
          text: "16:30 - 17:00",
          start: "2023-01-02T16:30:00",
          end: "2023-01-02T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 24,
          text: "16:00 - 16:30",
          start: "2023-01-02T16:00:00",
          end: "2023-01-02T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 25,
          text: "11:30 - 12:00",
          start: "2023-01-03T11:30:00",
          end: "2023-01-03T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 26,
          text: "11:00 - 11:30",
          start: "2023-01-03T11:00:00",
          end: "2023-01-03T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 27,
          text: "12:30 - 13:00",
          start: "2023-01-03T12:30:00",
          end: "2023-01-03T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 28,
          text: "12:00 - 12:30",
          start: "2023-01-03T12:00:00",
          end: "2023-01-03T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 29,
          text: "13:30 - 14:00",
          start: "2023-01-03T13:30:00",
          end: "2023-01-03T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 30,
          text: "13:00 - 13:30",
          start: "2023-01-03T13:00:00",
          end: "2023-01-03T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 31,
          text: "14:30 - 15:00",
          start: "2023-01-03T14:30:00",
          end: "2023-01-03T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 32,
          text: "14:00 - 14:30",
          start: "2023-01-03T14:00:00",
          end: "2023-01-03T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 33,
          text: "15:30 - 16:00",
          start: "2023-01-03T15:30:00",
          end: "2023-01-03T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 34,
          text: "15:00 - 15:30",
          start: "2023-01-03T15:00:00",
          end: "2023-01-03T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 35,
          text: "16:30 - 17:00",
          start: "2023-01-03T16:30:00",
          end: "2023-01-03T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 36,
          text: "16:00 - 16:30",
          start: "2023-01-03T16:00:00",
          end: "2023-01-03T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 37,
          text: "11:30 - 12:00",
          start: "2023-01-04T11:30:00",
          end: "2023-01-04T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 38,
          text: "11:00 - 11:30",
          start: "2023-01-04T11:00:00",
          end: "2023-01-04T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 39,
          text: "12:30 - 13:00",
          start: "2023-01-04T12:30:00",
          end: "2023-01-04T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 40,
          text: "12:00 - 12:30",
          start: "2023-01-04T12:00:00",
          end: "2023-01-04T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 41,
          text: "13:30 - 14:00",
          start: "2023-01-04T13:30:00",
          end: "2023-01-04T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 42,
          text: "13:00 - 13:30",
          start: "2023-01-04T13:00:00",
          end: "2023-01-04T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 43,
          text: "14:30 - 15:00",
          start: "2023-01-04T14:30:00",
          end: "2023-01-04T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 44,
          text: "14:00 - 14:30",
          start: "2023-01-04T14:00:00",
          end: "2023-01-04T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 45,
          text: "15:30 - 16:00",
          start: "2023-01-04T15:30:00",
          end: "2023-01-04T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 46,
          text: "15:00 - 15:30",
          start: "2023-01-04T15:00:00",
          end: "2023-01-04T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 47,
          text: "16:30 - 17:00",
          start: "2023-01-04T16:30:00",
          end: "2023-01-04T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 48,
          text: "16:00 - 16:30",
          start: "2023-01-04T16:00:00",
          end: "2023-01-04T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 49,
          text: "11:30 - 12:00",
          start: "2023-01-05T11:30:00",
          end: "2023-01-05T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 50,
          text: "11:00 - 11:30",
          start: "2023-01-05T11:00:00",
          end: "2023-01-05T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 51,
          text: "12:30 - 13:00",
          start: "2023-01-05T12:30:00",
          end: "2023-01-05T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 52,
          text: "12:00 - 12:30",
          start: "2023-01-05T12:00:00",
          end: "2023-01-05T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 53,
          text: "13:30 - 14:00",
          start: "2023-01-05T13:30:00",
          end: "2023-01-05T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 54,
          text: "13:00 - 13:30",
          start: "2023-01-05T13:00:00",
          end: "2023-01-05T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 55,
          text: "14:30 - 15:00",
          start: "2023-01-05T14:30:00",
          end: "2023-01-05T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 56,
          text: "14:00 - 14:30",
          start: "2023-01-05T14:00:00",
          end: "2023-01-05T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 57,
          text: "15:30 - 16:00",
          start: "2023-01-05T15:30:00",
          end: "2023-01-05T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 58,
          text: "15:00 - 15:30",
          start: "2023-01-05T15:00:00",
          end: "2023-01-05T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 59,
          text: "16:30 - 17:00",
          start: "2023-01-05T16:30:00",
          end: "2023-01-05T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 60,
          text: "16:00 - 16:30",
          start: "2023-01-05T16:00:00",
          end: "2023-01-05T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 61,
          text: "11:30 - 12:00",
          start: "2023-01-06T11:30:00",
          end: "2023-01-06T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 62,
          text: "11:00 - 11:30",
          start: "2023-01-06T11:00:00",
          end: "2023-01-06T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 63,
          text: "12:30 - 13:00",
          start: "2023-01-06T12:30:00",
          end: "2023-01-06T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 64,
          text: "12:00 - 12:30",
          start: "2023-01-06T12:00:00",
          end: "2023-01-06T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 65,
          text: "13:30 - 14:00",
          start: "2023-01-06T13:30:00",
          end: "2023-01-06T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 66,
          text: "13:00 - 13:30",
          start: "2023-01-06T13:00:00",
          end: "2023-01-06T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 67,
          text: "14:30 - 15:00",
          start: "2023-01-06T14:30:00",
          end: "2023-01-06T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 68,
          text: "14:00 - 14:30",
          start: "2023-01-06T14:00:00",
          end: "2023-01-06T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 69,
          text: "15:30 - 16:00",
          start: "2023-01-06T15:30:00",
          end: "2023-01-06T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 70,
          text: "15:00 - 15:30",
          start: "2023-01-06T15:00:00",
          end: "2023-01-06T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 71,
          text: "16:30 - 17:00",
          start: "2023-01-06T16:30:00",
          end: "2023-01-06T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 72,
          text: "16:00 - 16:30",
          start: "2023-01-06T16:00:00",
          end: "2023-01-06T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 73,
          text: "11:30 - 12:00",
          start: "2023-01-07T11:30:00",
          end: "2023-01-07T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 74,
          text: "11:00 - 11:30",
          start: "2023-01-07T11:00:00",
          end: "2023-01-07T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 75,
          text: "12:30 - 13:00",
          start: "2023-01-07T12:30:00",
          end: "2023-01-07T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 76,
          text: "12:00 - 12:30",
          start: "2023-01-07T12:00:00",
          end: "2023-01-07T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 77,
          text: "13:30 - 14:00",
          start: "2023-01-07T13:30:00",
          end: "2023-01-07T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 78,
          text: "13:00 - 13:30",
          start: "2023-01-07T13:00:00",
          end: "2023-01-07T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 79,
          text: "14:30 - 15:00",
          start: "2023-01-07T14:30:00",
          end: "2023-01-07T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 80,
          text: "14:00 - 14:30",
          start: "2023-01-07T14:00:00",
          end: "2023-01-07T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 81,
          text: "15:30 - 16:00",
          start: "2023-01-07T15:30:00",
          end: "2023-01-07T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 82,
          text: "15:00 - 15:30",
          start: "2023-01-07T15:00:00",
          end: "2023-01-07T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 83,
          text: "16:30 - 17:00",
          start: "2023-01-07T16:30:00",
          end: "2023-01-07T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 84,
          text: "16:00 - 16:30",
          start: "2023-01-07T16:00:00",
          end: "2023-01-07T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 85,
          text: "11:30 - 12:00",
          start: "2023-01-08T11:30:00",
          end: "2023-01-08T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 86,
          text: "11:00 - 11:30",
          start: "2023-01-08T11:00:00",
          end: "2023-01-08T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 87,
          text: "12:30 - 13:00",
          start: "2023-01-08T12:30:00",
          end: "2023-01-08T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 88,
          text: "12:00 - 12:30",
          start: "2023-01-08T12:00:00",
          end: "2023-01-08T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 89,
          text: "13:30 - 14:00",
          start: "2023-01-08T13:30:00",
          end: "2023-01-08T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 90,
          text: "13:00 - 13:30",
          start: "2023-01-08T13:00:00",
          end: "2023-01-08T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 91,
          text: "14:30 - 15:00",
          start: "2023-01-08T14:30:00",
          end: "2023-01-08T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 92,
          text: "14:00 - 14:30",
          start: "2023-01-08T14:00:00",
          end: "2023-01-08T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 93,
          text: "15:30 - 16:00",
          start: "2023-01-08T15:30:00",
          end: "2023-01-08T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 94,
          text: "15:00 - 15:30",
          start: "2023-01-08T15:00:00",
          end: "2023-01-08T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 95,
          text: "16:30 - 17:00",
          start: "2023-01-08T16:30:00",
          end: "2023-01-08T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 96,
          text: "16:00 - 16:30",
          start: "2023-01-08T16:00:00",
          end: "2023-01-08T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 97,
          text: "11:30 - 12:00",
          start: "2023-01-10T11:30:00",
          end: "2023-01-10T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 98,
          text: "11:00 - 11:30",
          start: "2023-01-10T11:00:00",
          end: "2023-01-10T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 99,
          text: "12:30 - 13:00",
          start: "2023-01-10T12:30:00",
          end: "2023-01-10T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 100,
          text: "12:00 - 12:30",
          start: "2023-01-10T12:00:00",
          end: "2023-01-10T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 101,
          text: "13:30 - 14:00",
          start: "2023-01-10T13:30:00",
          end: "2023-01-10T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 102,
          text: "13:00 - 13:30",
          start: "2023-01-10T13:00:00",
          end: "2023-01-10T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 103,
          text: "14:30 - 15:00",
          start: "2023-01-10T14:30:00",
          end: "2023-01-10T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 104,
          text: "14:00 - 14:30",
          start: "2023-01-10T14:00:00",
          end: "2023-01-10T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 105,
          text: "15:30 - 16:00",
          start: "2023-01-10T15:30:00",
          end: "2023-01-10T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 106,
          text: "15:00 - 15:30",
          start: "2023-01-10T15:00:00",
          end: "2023-01-10T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 107,
          text: "16:30 - 17:00",
          start: "2023-01-10T16:30:00",
          end: "2023-01-10T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 108,
          text: "16:00 - 16:30",
          start: "2023-01-10T16:00:00",
          end: "2023-01-10T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 109,
          text: "11:30 - 12:00",
          start: "2023-01-11T11:30:00",
          end: "2023-01-11T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 110,
          text: "11:00 - 11:30",
          start: "2023-01-11T11:00:00",
          end: "2023-01-11T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 111,
          text: "12:30 - 13:00",
          start: "2023-01-11T12:30:00",
          end: "2023-01-11T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 112,
          text: "12:00 - 12:30",
          start: "2023-01-11T12:00:00",
          end: "2023-01-11T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 113,
          text: "13:30 - 14:00",
          start: "2023-01-11T13:30:00",
          end: "2023-01-11T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 114,
          text: "13:00 - 13:30",
          start: "2023-01-11T13:00:00",
          end: "2023-01-11T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 115,
          text: "14:30 - 15:00",
          start: "2023-01-11T14:30:00",
          end: "2023-01-11T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 116,
          text: "14:00 - 14:30",
          start: "2023-01-11T14:00:00",
          end: "2023-01-11T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 117,
          text: "15:30 - 16:00",
          start: "2023-01-11T15:30:00",
          end: "2023-01-11T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 118,
          text: "15:00 - 15:30",
          start: "2023-01-11T15:00:00",
          end: "2023-01-11T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 119,
          text: "16:30 - 17:00",
          start: "2023-01-11T16:30:00",
          end: "2023-01-11T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 120,
          text: "16:00 - 16:30",
          start: "2023-01-11T16:00:00",
          end: "2023-01-11T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 121,
          text: "11:30 - 12:00",
          start: "2023-01-12T11:30:00",
          end: "2023-01-12T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 122,
          text: "11:00 - 11:30",
          start: "2023-01-12T11:00:00",
          end: "2023-01-12T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 123,
          text: "12:30 - 13:00",
          start: "2023-01-12T12:30:00",
          end: "2023-01-12T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 124,
          text: "12:00 - 12:30",
          start: "2023-01-12T12:00:00",
          end: "2023-01-12T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 125,
          text: "13:30 - 14:00",
          start: "2023-01-12T13:30:00",
          end: "2023-01-12T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 126,
          text: "13:00 - 13:30",
          start: "2023-01-12T13:00:00",
          end: "2023-01-12T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 127,
          text: "14:30 - 15:00",
          start: "2023-01-12T14:30:00",
          end: "2023-01-12T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 128,
          text: "14:00 - 14:30",
          start: "2023-01-12T14:00:00",
          end: "2023-01-12T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 129,
          text: "15:30 - 16:00",
          start: "2023-01-12T15:30:00",
          end: "2023-01-12T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 130,
          text: "15:00 - 15:30",
          start: "2023-01-12T15:00:00",
          end: "2023-01-12T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 131,
          text: "16:30 - 17:00",
          start: "2023-01-12T16:30:00",
          end: "2023-01-12T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 132,
          text: "16:00 - 16:30",
          start: "2023-01-12T16:00:00",
          end: "2023-01-12T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 133,
          text: "11:30 - 12:00",
          start: "2023-01-13T11:30:00",
          end: "2023-01-13T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 134,
          text: "11:00 - 11:30",
          start: "2023-01-13T11:00:00",
          end: "2023-01-13T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 135,
          text: "12:30 - 13:00",
          start: "2023-01-13T12:30:00",
          end: "2023-01-13T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 136,
          text: "12:00 - 12:30",
          start: "2023-01-13T12:00:00",
          end: "2023-01-13T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 137,
          text: "13:30 - 14:00",
          start: "2023-01-13T13:30:00",
          end: "2023-01-13T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 138,
          text: "13:00 - 13:30",
          start: "2023-01-13T13:00:00",
          end: "2023-01-13T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 139,
          text: "14:30 - 15:00",
          start: "2023-01-13T14:30:00",
          end: "2023-01-13T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 140,
          text: "14:00 - 14:30",
          start: "2023-01-13T14:00:00",
          end: "2023-01-13T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 141,
          text: "15:30 - 16:00",
          start: "2023-01-13T15:30:00",
          end: "2023-01-13T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 142,
          text: "15:00 - 15:30",
          start: "2023-01-13T15:00:00",
          end: "2023-01-13T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 143,
          text: "16:30 - 17:00",
          start: "2023-01-13T16:30:00",
          end: "2023-01-13T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 144,
          text: "16:00 - 16:30",
          start: "2023-01-13T16:00:00",
          end: "2023-01-13T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 145,
          text: "11:30 - 12:00",
          start: "2023-01-14T11:30:00",
          end: "2023-01-14T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 146,
          text: "11:00 - 11:30",
          start: "2023-01-14T11:00:00",
          end: "2023-01-14T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 147,
          text: "12:30 - 13:00",
          start: "2023-01-14T12:30:00",
          end: "2023-01-14T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 148,
          text: "12:00 - 12:30",
          start: "2023-01-14T12:00:00",
          end: "2023-01-14T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 149,
          text: "13:30 - 14:00",
          start: "2023-01-14T13:30:00",
          end: "2023-01-14T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 150,
          text: "13:00 - 13:30",
          start: "2023-01-14T13:00:00",
          end: "2023-01-14T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 151,
          text: "14:30 - 15:00",
          start: "2023-01-14T14:30:00",
          end: "2023-01-14T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 152,
          text: "14:00 - 14:30",
          start: "2023-01-14T14:00:00",
          end: "2023-01-14T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 153,
          text: "15:30 - 16:00",
          start: "2023-01-14T15:30:00",
          end: "2023-01-14T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 154,
          text: "15:00 - 15:30",
          start: "2023-01-14T15:00:00",
          end: "2023-01-14T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 155,
          text: "16:30 - 17:00",
          start: "2023-01-14T16:30:00",
          end: "2023-01-14T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 156,
          text: "16:00 - 16:30",
          start: "2023-01-14T16:00:00",
          end: "2023-01-14T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 157,
          text: "11:30 - 12:00",
          start: "2023-01-15T11:30:00",
          end: "2023-01-15T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 158,
          text: "11:00 - 11:30",
          start: "2023-01-15T11:00:00",
          end: "2023-01-15T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 159,
          text: "12:30 - 13:00",
          start: "2023-01-15T12:30:00",
          end: "2023-01-15T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 160,
          text: "12:00 - 12:30",
          start: "2023-01-15T12:00:00",
          end: "2023-01-15T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 161,
          text: "13:30 - 14:00",
          start: "2023-01-15T13:30:00",
          end: "2023-01-15T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 162,
          text: "13:00 - 13:30",
          start: "2023-01-15T13:00:00",
          end: "2023-01-15T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 163,
          text: "14:30 - 15:00",
          start: "2023-01-15T14:30:00",
          end: "2023-01-15T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 164,
          text: "14:00 - 14:30",
          start: "2023-01-15T14:00:00",
          end: "2023-01-15T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 165,
          text: "15:30 - 16:00",
          start: "2023-01-15T15:30:00",
          end: "2023-01-15T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 166,
          text: "15:00 - 15:30",
          start: "2023-01-15T15:00:00",
          end: "2023-01-15T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 167,
          text: "16:30 - 17:00",
          start: "2023-01-15T16:30:00",
          end: "2023-01-15T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 168,
          text: "16:00 - 16:30",
          start: "2023-01-15T16:00:00",
          end: "2023-01-15T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 169,
          text: "11:30 - 12:00",
          start: "2023-01-16T11:30:00",
          end: "2023-01-16T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 170,
          text: "11:00 - 11:30",
          start: "2023-01-16T11:00:00",
          end: "2023-01-16T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 171,
          text: "12:30 - 13:00",
          start: "2023-01-16T12:30:00",
          end: "2023-01-16T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 172,
          text: "12:00 - 12:30",
          start: "2023-01-16T12:00:00",
          end: "2023-01-16T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 173,
          text: "13:30 - 14:00",
          start: "2023-01-16T13:30:00",
          end: "2023-01-16T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 174,
          text: "13:00 - 13:30",
          start: "2023-01-16T13:00:00",
          end: "2023-01-16T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 175,
          text: "14:30 - 15:00",
          start: "2023-01-16T14:30:00",
          end: "2023-01-16T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 176,
          text: "14:00 - 14:30",
          start: "2023-01-16T14:00:00",
          end: "2023-01-16T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 177,
          text: "15:30 - 16:00",
          start: "2023-01-16T15:30:00",
          end: "2023-01-16T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 178,
          text: "15:00 - 15:30",
          start: "2023-01-16T15:00:00",
          end: "2023-01-16T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 179,
          text: "16:30 - 17:00",
          start: "2023-01-16T16:30:00",
          end: "2023-01-16T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 180,
          text: "16:00 - 16:30",
          start: "2023-01-16T16:00:00",
          end: "2023-01-16T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 181,
          text: "11:30 - 12:00",
          start: "2023-01-17T11:30:00",
          end: "2023-01-17T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 182,
          text: "11:00 - 11:30",
          start: "2023-01-17T11:00:00",
          end: "2023-01-17T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 183,
          text: "12:30 - 13:00",
          start: "2023-01-17T12:30:00",
          end: "2023-01-17T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 184,
          text: "12:00 - 12:30",
          start: "2023-01-17T12:00:00",
          end: "2023-01-17T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 185,
          text: "13:30 - 14:00",
          start: "2023-01-17T13:30:00",
          end: "2023-01-17T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 186,
          text: "13:00 - 13:30",
          start: "2023-01-17T13:00:00",
          end: "2023-01-17T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 187,
          text: "14:30 - 15:00",
          start: "2023-01-17T14:30:00",
          end: "2023-01-17T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 188,
          text: "14:00 - 14:30",
          start: "2023-01-17T14:00:00",
          end: "2023-01-17T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 189,
          text: "15:30 - 16:00",
          start: "2023-01-17T15:30:00",
          end: "2023-01-17T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 190,
          text: "15:00 - 15:30",
          start: "2023-01-17T15:00:00",
          end: "2023-01-17T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 191,
          text: "16:30 - 17:00",
          start: "2023-01-17T16:30:00",
          end: "2023-01-17T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 192,
          text: "16:00 - 16:30",
          start: "2023-01-17T16:00:00",
          end: "2023-01-17T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 193,
          text: "11:30 - 12:00",
          start: "2023-01-18T11:30:00",
          end: "2023-01-18T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 194,
          text: "11:00 - 11:30",
          start: "2023-01-18T11:00:00",
          end: "2023-01-18T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 195,
          text: "12:30 - 13:00",
          start: "2023-01-18T12:30:00",
          end: "2023-01-18T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 196,
          text: "12:00 - 12:30",
          start: "2023-01-18T12:00:00",
          end: "2023-01-18T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 197,
          text: "13:30 - 14:00",
          start: "2023-01-18T13:30:00",
          end: "2023-01-18T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 198,
          text: "13:00 - 13:30",
          start: "2023-01-18T13:00:00",
          end: "2023-01-18T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 199,
          text: "14:30 - 15:00",
          start: "2023-01-18T14:30:00",
          end: "2023-01-18T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 200,
          text: "14:00 - 14:30",
          start: "2023-01-18T14:00:00",
          end: "2023-01-18T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 201,
          text: "15:30 - 16:00",
          start: "2023-01-18T15:30:00",
          end: "2023-01-18T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 202,
          text: "15:00 - 15:30",
          start: "2023-01-18T15:00:00",
          end: "2023-01-18T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 203,
          text: "16:30 - 17:00",
          start: "2023-01-18T16:30:00",
          end: "2023-01-18T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 204,
          text: "16:00 - 16:30",
          start: "2023-01-18T16:00:00",
          end: "2023-01-18T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 205,
          text: "11:30 - 12:00",
          start: "2023-01-19T11:30:00",
          end: "2023-01-19T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 206,
          text: "11:00 - 11:30",
          start: "2023-01-19T11:00:00",
          end: "2023-01-19T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 207,
          text: "12:30 - 13:00",
          start: "2023-01-19T12:30:00",
          end: "2023-01-19T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 208,
          text: "12:00 - 12:30",
          start: "2023-01-19T12:00:00",
          end: "2023-01-19T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 209,
          text: "13:30 - 14:00",
          start: "2023-01-19T13:30:00",
          end: "2023-01-19T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 210,
          text: "13:00 - 13:30",
          start: "2023-01-19T13:00:00",
          end: "2023-01-19T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 211,
          text: "14:30 - 15:00",
          start: "2023-01-19T14:30:00",
          end: "2023-01-19T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 212,
          text: "14:00 - 14:30",
          start: "2023-01-19T14:00:00",
          end: "2023-01-19T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 213,
          text: "15:30 - 16:00",
          start: "2023-01-19T15:30:00",
          end: "2023-01-19T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 214,
          text: "15:00 - 15:30",
          start: "2023-01-19T15:00:00",
          end: "2023-01-19T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 215,
          text: "16:30 - 17:00",
          start: "2023-01-19T16:30:00",
          end: "2023-01-19T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 216,
          text: "16:00 - 16:30",
          start: "2023-01-19T16:00:00",
          end: "2023-01-19T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 217,
          text: "11:30 - 12:00",
          start: "2023-01-20T11:30:00",
          end: "2023-01-20T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 218,
          text: "11:00 - 11:30",
          start: "2023-01-20T11:00:00",
          end: "2023-01-20T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 219,
          text: "12:30 - 13:00",
          start: "2023-01-20T12:30:00",
          end: "2023-01-20T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 220,
          text: "12:00 - 12:30",
          start: "2023-01-20T12:00:00",
          end: "2023-01-20T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 221,
          text: "13:30 - 14:00",
          start: "2023-01-20T13:30:00",
          end: "2023-01-20T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 222,
          text: "13:00 - 13:30",
          start: "2023-01-20T13:00:00",
          end: "2023-01-20T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 223,
          text: "14:30 - 15:00",
          start: "2023-01-20T14:30:00",
          end: "2023-01-20T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 224,
          text: "14:00 - 14:30",
          start: "2023-01-20T14:00:00",
          end: "2023-01-20T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 225,
          text: "15:30 - 16:00",
          start: "2023-01-20T15:30:00",
          end: "2023-01-20T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 226,
          text: "15:00 - 15:30",
          start: "2023-01-20T15:00:00",
          end: "2023-01-20T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 227,
          text: "16:30 - 17:00",
          start: "2023-01-20T16:30:00",
          end: "2023-01-20T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 228,
          text: "16:00 - 16:30",
          start: "2023-01-20T16:00:00",
          end: "2023-01-20T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 229,
          text: "11:30 - 12:00",
          start: "2023-01-21T11:30:00",
          end: "2023-01-21T12:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 230,
          text: "11:00 - 11:30",
          start: "2023-01-21T11:00:00",
          end: "2023-01-21T11:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 231,
          text: "12:30 - 13:00",
          start: "2023-01-21T12:30:00",
          end: "2023-01-21T13:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 232,
          text: "12:00 - 12:30",
          start: "2023-01-21T12:00:00",
          end: "2023-01-21T12:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 233,
          text: "13:30 - 14:00",
          start: "2023-01-21T13:30:00",
          end: "2023-01-21T14:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 234,
          text: "13:00 - 13:30",
          start: "2023-01-21T13:00:00",
          end: "2023-01-21T13:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 235,
          text: "14:30 - 15:00",
          start: "2023-01-21T14:30:00",
          end: "2023-01-21T15:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 236,
          text: "14:00 - 14:30",
          start: "2023-01-21T14:00:00",
          end: "2023-01-21T14:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 237,
          text: "15:30 - 16:00",
          start: "2023-01-21T15:30:00",
          end: "2023-01-21T16:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 238,
          text: "15:00 - 15:30",
          start: "2023-01-21T15:00:00",
          end: "2023-01-21T15:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 239,
          text: "16:30 - 17:00",
          start: "2023-01-21T16:30:00",
          end: "2023-01-21T17:00:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        },
        {
          id: 240,
          text: "16:00 - 16:30",
          start: "2023-01-21T16:00:00",
          end: "2023-01-21T16:30:00",
          backColor: "#0d6efd",
          fontColor: "white",
          cssClass: "event"
        }
      ]
    });
  }

  render() {
    const { ...config } = this.state;
    return (
      <div className="wrapper">
        <DayPilotNavigator 
        selectMode={"week"}
        onTimeRangeSelected={ args => {
          this.calendar.update({
            startDate: args.day
          });
        }}/>
        <DayPilotCalendar {...config} ref={this.calendarRef} onEventClicked={this.EventClicked}/>
        <div></div>
      </div>
    );
  }
}



export default Calendar;
