// ==UserScript==
// @name         Autograder Code Syntax-Highlighting
// @namespace    http://tampermonkey.net/
// @version      0.2.2
// @description  Syntax-highlighting for submission files on autograder.io
// @author       Viroshan Narayan and Norman Wen
// @license      MIT
// @match        http*://autograder.io/*
// @icon         data:image/png;base64,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
// @resource     highlightJS    https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @resource     lineNumbersJS    https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js
// @grant        GM.getResourceUrl
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_setValue
// @downloadURL https://update.greasyfork.org/scripts/468031/Autograder%20Code%20Syntax-Highlighting.user.js
// @updateURL https://update.greasyfork.org/scripts/468031/Autograder%20Code%20Syntax-Highlighting.meta.js
// ==/UserScript==

// Copyright (c) 2024 Viroshan Narayan and Wen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


(function () {
    'use strict';

    // Variables for bookkeeping
    const classNameOpenFileLink = 'open-file-link';
    const classSubmissionListItem = 'submission-list-item';
    const classCodeExtras = 'code-extras';
    const classThemeDropdown = 'dropdown-menu';
    const idCopyButton = 'copy-btn';
    const idViewFileContainer = 'view-file-container';
    const idCodeExtras = 'code-extras';
    const idThemeDropdown = 'theme-dropdown';
    const idCodeView = 'syntax-highlighted-code-view';
    const idPreTag = 'syntax-highlighted-pre-tag';
    const idAdjustFeedback = 'adjust-feedback-section';
    const idThemeCss = 'theme-highlight-js';

    let openLink = null; // Stores textContent of link since the elements don't have ids

    // Available themes can be found at https://github.com/highlightjs/highlight.js/tree/main/src/styles
    const themeOptions = [
        { value: 'default', text: 'Default' },
        { value: 'atom-one-dark', text: 'Atom One Dark' },
        { value: 'atom-one-dark-reasonable', text: 'Atom One Dark Reasonable' },
        { value: 'dark', text: 'Dark' },
        { value: 'github-dark', text: 'GitHub Dark' },
        { value: 'github-dark-dimmed', text: 'GitHub Dark Dimmed' },
        { value: 'ir-black', text: 'IR Black' },
        { value: 'stackoverflow-dark', text: 'Stack Overflow Dark' },
        { value: 'stackoverflow-light', text: 'Stack Overflow Light' },
        { value: 'tokyo-night-dark', text: 'Tokyo Night Dark' },
        { value: 'tokyo-night-light', text: 'Tokyo Night Light' },
        { value: 'tomorrow-night-blue', text: 'Tomorrow Night Blue' },
        { value: 'tomorrow-night-bright', text: 'Tomorrow Night Bright' },
        { value: 'vs', text: 'VS' },
        { value: 'vs2015', text: 'VS 2015' },
        { value: 'xcode', text: 'XCode' }
    ];


    /**
     * Replace existing highlight.js theme with the selected one.
     *
     * @param {string} theme - The name of the theme to use
     */
    const setTheme = (theme) => {
        // Validate the theme - make unvalidated script srcs are not used
        let themeValid = false;
        for (const option of themeOptions) {
            if (option.value === theme) {
                themeValid = true;
                break;
            }
        }

        if (!themeValid) {
            console.error(`Invalid theme: ${theme}`);
            return;
        }

        // Remove current stylesheet
        const currentTheme = document.getElementById(idThemeCss);
        if (currentTheme) {
            currentTheme.remove();
        }

        const themeLink = document.createElement('link');
        themeLink.id = idThemeCss;
        themeLink.rel = 'stylesheet';
        themeLink.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${theme}.min.css`;

        document.head.appendChild(themeLink);
        GM_setValue('highlightJS-theme', theme);
    };


    /**
     * Return a Promise that resolves when the selector changes.
     *
     * @param {string} selector - The selector to wait for
     * @returns {Promise} - The Promise that resolves when the selector changes
     *
     * @example
     * waitForChange('#my-element').then((e) => {
     *    console.log('Element changed!');
     * });
     */
    const waitForChange = (selector) => {

        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    };


    /**
     * Sanitize text to be HTML-compatible.
     *
     * @param {string} text - The text to sanitize
     * @returns {string} - The sanitized text
     */
    const escapeHTML = (text) => {
        return text.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };


    /**
     * Take code as text and make the code view have a syntax-highlighted version.
     *
     * @param {string} codeText - The code to display
     */
    const showCode = (codeText) => {
        const codeTag = document.getElementById(idCodeView);
        codeTag.innerHTML = escapeHTML(codeText);

        hljs.highlightAll();
        hljs.initLineNumbersOnLoad();
    };


    /**
     * Get all code in the currently-open submission file.
     *
     * @returns {string} - The code in the file, whitespace preserved
     */
    const getCode = () => {
        // Get code text
        const table = document.querySelector(`#${idViewFileContainer} table`);

        let codeText = '';

        for (const row of table.rows) {
            const col = row.cells[1];

            // Preserve whitespace
            if (col.textContent.trim() === '') {
                codeText = codeText.concat('\n');
            }
            else {
                codeText = codeText.concat(col.textContent + '\n');
            }

        }

        return codeText;
    };


    /**
     * Function to run when a submission-file link is clicked.
     * Wait for displayed code to change and then color it.
     *
     * @param {Event} e - The click event
     */
    const linkClick = (e) => {
        // Set the currently-open link
        const openLinkTextContent = e.target.textContent;
        if (openLinkTextContent === openLink) {
            // Don't do anything if the link is already open
            return;
        }
        openLink = openLinkTextContent;

        // Wait for code to change
        waitForChange(`#${idViewFileContainer} table`).then((e) => {

            // Display the code
            const codeText = getCode();
            showCode(codeText);

            // Show the theme dropdown
            const codeExtras = document.getElementById(idCodeExtras);
            codeExtras.style.display = '';

            // Hide the default code view
            const codeContainer = document.getElementById(idViewFileContainer);
            codeContainer.style.display = 'none';
        });
    };


    /**
     * * Add onclick listeners to submission-file links
     * * Create region for displaying code
     * * Add onclick listeners for other submissions
     */
    const addListenersAndCodeRegion = () => {
        // Wait for file links to render
        const addFileLinkListeners = () => {
            waitForChange('.' + classNameOpenFileLink).then((e) => {
                // Set currently-open link to null
                openLink = null;

                // Add click listeners to submission-file links
                const fileLinks = Array.from(
                    document.getElementsByClassName(classNameOpenFileLink)
                );

                fileLinks.forEach(link => {
                    link.addEventListener('click', linkClick);
                });

                // Remove any pre-existing pre tag and theme-dropdown
                const existingPreTag = document.getElementById(idPreTag);
                if (existingPreTag) {
                    existingPreTag.remove();
                }
                const existingCodeExtras = document.getElementById(idCodeExtras);
                if (existingCodeExtras) {
                    existingCodeExtras.remove();
                }

                const submittedFilesContainer = document.getElementsByClassName('submitted-files')[0];

                /**
                 * Create a dropdown to select the highlight.js theme.
                 *
                 * @returns {HTMLSelectElement} - The created dropdown (not linked to DOM)
                 */
                const constructDropdown = () => {
                    // Create element
                    const themesDropdown = document.createElement('select');
                    themesDropdown.id = idThemeDropdown;
                    themesDropdown.className = classThemeDropdown;

                    // Add options to the select
                    themeOptions.forEach(function (option) {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.value;
                        optionElement.text = option.text;
                        themesDropdown.appendChild(optionElement);
                    });

                    themesDropdown.addEventListener('change', (e) => {
                        setTheme(e.target.value);
                    });

                    const lastUsedTheme = GM_getValue('highlightJS-theme', 'default');
                    themesDropdown.value = lastUsedTheme.trim() === '' ? 'default' : lastUsedTheme;

                    return themesDropdown;
                };

                /**
                 * Create a button to let the user copy a file's code to their clipboard.
                 *
                 * @returns {HTMLButtonElement} - The created button (not linked to DOM)
                 */
                const constructCopyButton = () => {
                    // Create a button with copy icon
                    const copyIcon = document.createElement('i');
                    copyIcon.classList.add('far', 'fa-copy');
                    const copyBtn = document.createElement('button');
                    copyBtn.id = idCopyButton;
                    copyBtn.classList.add('hljs');
                    copyBtn.appendChild(copyIcon);

                    // Add click listener to copy code to clipboard
                    copyBtn.addEventListener('click', (e) => {
                        // Copy to clipboard
                        GM_setClipboard(getCode());

                        // Change icon to indicate that code was copied
                        const existingCopyIcon = document.querySelector(`#${idCopyButton} i`);
                        existingCopyIcon.classList.remove('far');
                        existingCopyIcon.classList.add('fa');

                        // Change icon back after delay
                        setTimeout(() => {
                            existingCopyIcon.classList.remove('fa');
                            existingCopyIcon.classList.add('far');
                        }, 2000);
                    });

                    return copyBtn;
                };

                // Create themes dropdown and copy button
                const codeExtras = document.createElement('div');
                codeExtras.id = idCodeExtras;
                codeExtras.classList.add(classCodeExtras);

                const stylesDropdown = constructDropdown();
                setTheme(stylesDropdown.value); // Make sure the selected theme is loaded
                codeExtras.style.display = 'none'; // Don't display (only open when code is shown)
                const dropdownDiv = document.createElement('div');
                dropdownDiv.appendChild(stylesDropdown);
                codeExtras.appendChild(dropdownDiv);

                const copyDiv = document.createElement('div');
                copyDiv.appendChild(constructCopyButton());
                codeExtras.appendChild(copyDiv);

                submittedFilesContainer.appendChild(codeExtras);


                // Add tags for syntax-highlighted code to go into
                const preTag = document.createElement('pre');
                const codeTag = document.createElement('code');

                submittedFilesContainer.appendChild(preTag);
                preTag.appendChild(codeTag);
                preTag.id = idPreTag;
                codeTag.id = idCodeView;

                // The "Adjust Feedback" display attribute gets copied from the standard code view,
                // which we have set to 'none', so we need to display this manually.
                const dropdownAdjustFeedback = document.getElementById(idAdjustFeedback);
                if (dropdownAdjustFeedback) {
                    dropdownAdjustFeedback.style.display = '';
                }
            });
        };

        addFileLinkListeners();

        waitForChange(`.${classSubmissionListItem}`).then((e) => {
            const submissionLinks = Array.from(
                document.getElementsByClassName(classSubmissionListItem)
            );

            submissionLinks.forEach(link => {
                link.addEventListener('click', () => {
                    openLink = null;
                    addFileLinkListeners();
                });
            });
        });
    };


    /**
     * Load highlight.js resources, set styles, and prepare page.
     */
    const setUpPage = () => {
        // Load the highlight.js script
        GM.getResourceUrl('highlightJS').then((highlightJsScriptUrl) => {
            const highlightJsScript1Element = document.createElement('script');
            highlightJsScript1Element.src = highlightJsScriptUrl;

            highlightJsScript1Element.onload = () => {
                // highlight.js script finished loading, so
                // load the line-numbers script
                GM.getResourceUrl('lineNumbersJS').then(function (lineNumbersScriptUrl) {
                    const lineNumbersScriptElement = document.createElement('script');
                    lineNumbersScriptElement.src = lineNumbersScriptUrl;
                    document.head.appendChild(lineNumbersScriptElement);

                    addListenersAndCodeRegion();
                });
            };

            document.head.appendChild(highlightJsScript1Element);
        });

        // Add some jank styling for the highlighted code
        const styleElement = document.createElement('style');
        styleElement.id = 'style-autograder-syntax-highlighting'
        styleElement.textContent = `
            /* Add padding for line numbers */
            .hljs-ln-numbers { padding-right: 8px !important; }

            /* Set font-size of code */
            #${idCodeView} { font-size: 14px; }

            .${classCodeExtras} {
                position: absolute;
                right: 20px;
            }

            /* Theme-selection-dropdown style (stolen from bootstrap5 :P) */
            .${classThemeDropdown} {
                padding: 0.375rem 2.25rem 0.375rem 0.75rem;
                margin-top: 1rem;
                margin-bottom: 0.375rem;
                color: #212529;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right 0.75rem center;
                background-size: 16px 12px;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                outline: none;
                appearance: none;
            }

            /* Style the button used to copy a file's code */
            #${idCopyButton} {
                float: right;
                padding: 0.4rem;
                border-radius: 6px;
                cursor: pointer;
                border: 2px solid rgb(240 246 252 / 30%);
            }
        `;
        document.head.appendChild(styleElement);
    };


    /**
     * Create a 'locationchange' event to be fired whenever the URL changes.
     * This is necessary because the page doesn't reload when the URL changes.
     */
    (() => {
        let oldPushState = history.pushState;
        history.pushState = function pushState() {
            let ret = oldPushState.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };

        let oldReplaceState = history.replaceState;
        history.replaceState = function replaceState() {
            let ret = oldReplaceState.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };

        window.addEventListener('popstate', () => {
            window.dispatchEvent(new Event('locationchange'));
        });
    })();


    /**
     * Determine if the current url is a valid candidate for syntax highlighting.
     *
     * @param {string} url - The url to check
     * @returns {boolean} - Whether or not the url is a valid candidate
     */
    const isTargetLink = (url) => {
        const patternMySubmissions = /http.*:\/\/autograder\.io\/web\/project\/.*current_tab=my_submissions.*/;
        const patternStudentLookup = /http.*:\/\/autograder\.io\/web\/project\/.*current_tab=student_lookup.*/;
        const patternHandgrading = /http.*:\/\/autograder\.io\/web\/project\/.*current_tab=handgrading.*/;

        return patternMySubmissions.test(url) || patternStudentLookup.test(url) || patternHandgrading.test(url);
    };


    // Set up the page if we are ever at a valid link
    if (isTargetLink(window.location.href)) {
        setUpPage();
    }

    window.addEventListener('locationchange', () => {
        if (isTargetLink(window.location.href)) {
            setUpPage();
        }
    });


})();

