# Date Picker

[Watch on Storybook](https://64cc3074490045000846bcdf--wondrous-travesseiro-602d8e.netlify.app/?path=/story/calendar--base)

### Instalation

```
npm i calendar-with-todo-list
```

### Components

```
<Calendar />
```

### Props

```
type?: 0 | 1 | 2 (0 - week, 1 - month (default), 2 - year)
color?: string
min?: Date
max?: Date
firstDayOfWeek?: 0 | 1 (0 - sunday, 1 - monday (default))
todoList?: boolean
weekends?: boolean
daysOff?: boolean
```

- **type** defines view and size of your calendar.
- **color** is primary color of calendar. It should be valid css color format, for example hex or rgb.
- **min** is javascript Date object
- **max** is javascript Date object
- **firstDayOfWeek** defines the day a week starts with
- **todoList** defines if todo list is alavible
- **weekends** defines if weekedns will be highlight with primary color
- **daysOff** defines if daysOff (defined by this library) will be highlight with primary color
