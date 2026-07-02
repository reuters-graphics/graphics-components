---
'@reuters-graphics/graphics-components': minor
---

Geocoder: add configurable `minLength` and `debounceMs` props (defaults
unchanged at 2 chars / 300 ms). Raising them reduces the number of paid Mapbox
geocoding requests made per search — each keystroke past the debounce window
bills a request.
