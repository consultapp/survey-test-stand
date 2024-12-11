import * as ReactDOM from 'react-dom/client'

export default (window.ReactDOM ?? ReactDOM) as unknown as typeof ReactDOM
