// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag('config', 'UA-198868669-1', {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
    action,
    category,
    label,
    value
}) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}