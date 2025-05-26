// ==UserScript==
// @name         YouTube Embed Button Under Video (Robust/Fallback)
// @namespace    https://github.com/almahmudbd
// @version      2.2
// @description  Adds a button under YouTube videos (or floating) to open the embed page for the current video. Author: unknown (https://github.com/almahmudbd)
// @author       unknown
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function getVideoId() {
        const urlObj = new URL(window.location.href);
        return urlObj.searchParams.get('v');
    }

    function createEmbedButton() {
        const btn = document.createElement('button');
        btn.id = 'yt-embed-link-btn';
        btn.textContent = '▶ Open Embed Page';
        btn.style.marginLeft = "8px";
        btn.style.padding = "6px 12px";
        btn.style.background = "#222";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "3px";
        btn.style.cursor = "pointer";
        btn.title = "Open this video in YouTube embed view";
        btn.onclick = () => {
            const videoId = getVideoId();
            if (videoId) {
                window.open(`https://www.youtube.com/embed/${videoId}`, '_blank');
            }
        };
        return btn;
    }

    function insertEmbedButton() {
        // Remove existing button if any
        const old = document.getElementById('yt-embed-link-btn');
        if (old) old.remove();

        const btn = createEmbedButton();
        let inserted = false;

        // Try actions bar
        let actionsRow = document.querySelector('#top-level-buttons-computed, ytd-menu-renderer #top-level-buttons');
        if (actionsRow) {
            actionsRow.appendChild(btn);
            inserted = true;
        }

        // Try video description/info area
        if (!inserted) {
            let infoContents = document.querySelector('#info-contents');
            if (infoContents) {
                infoContents.appendChild(btn);
                inserted = true;
            }
        }

        // Fallback: floating button
        if (!inserted) {
            btn.style.position = 'fixed';
            btn.style.zIndex = 99999;
            btn.style.bottom = '24px';
            btn.style.right = '24px';
            document.body.appendChild(btn);
        }
    }

    // SPA navigation and dynamic load
    let lastUrl = location.href;
    const observer = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            setTimeout(insertEmbedButton, 700);
        }
        // Always try to re-insert if button is missing (handles dynamic loading)
        if (!document.getElementById('yt-embed-link-btn')) {
            setTimeout(insertEmbedButton, 700);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(insertEmbedButton, 1000);
})();
