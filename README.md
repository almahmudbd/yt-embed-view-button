# YouTube Embed View Button UserScript

This UserScript adds a convenient button to YouTube video pages. With a single click, you can open the current video in YouTube's embed view, either under the video, in the info area, or as a floating button—ensuring it's always accessible.
It may help you to solve some problem.

## Features

- **Embed Button Under Video:** Button is injected under standard video action buttons.  
- **Fallback Locations:** If the action bar isn’t available, the button appears in the info/description area or as a floating button at the bottom-right corner.
- **Single Click to Embed:** Opens the current video’s embed page in a new tab.
- **SPA Compatible:** Works with YouTube’s single-page navigation and dynamic content loading.
- **No Redirects:** Regular YouTube navigation is untouched.

## Installation

1. Install a userscript manager like [Tampermonkey](https://tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. [install the script from greasyfork](https://greasyfork.org/en/scripts/537364-youtube-embed-button-under-video)  or this github repo here.
   *(you can copy the contents of `userscript` into a new userscript)*

## Usage

- Visit any YouTube video page (`https://www.youtube.com/watch?v=...`).
- Look for the "▶ Open Embed Page" button under the video, in the info area, or as a floating button (bottom right).
- Click the button to open the embed version of the current video in a new tab.

## alternative version
if the default one has failed, you can make a try with so called `alternative-version` from this repo.

## Author

- **unknown**  but edited with copilot and published by meh -_-
- [https://github.com/almahmudbd](https://github.com/almahmudbd)

## License

[GPL-3](LICENSE)

---

*This script is not affiliated with or endorsed by YouTube or Google.*
