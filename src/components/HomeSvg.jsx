import { useId } from "react";
import "../styles/HomeSvg.css";

export default function HomeSvg({
  className = "",
  panelTheme = "dark",
  collectedContacts = 70,
  selectedContacts = 67,
  mailsPerHour = 80,
}) {
  const symbolPrefix = useId();

  return (
    <figure
      className={`lee-hero ${className}`.trim()}
      role="img"
      aria-label={`Illustration of LinkedIn Email Extractor beside a Gmail-style Sent folder. The preview highlights ${collectedContacts} collected contacts, ${selectedContacts} selected recipients, a ${mailsPerHour} mails per hour setting, and email verification before sending. All contacts are fictional.`}
    >
      <svg
        className="lee-symbols"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <symbol id={`${symbolPrefix}-lee-i-mail`} viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m4 7 8 6 8-6" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-send`} viewBox="0 0 24 24">
            <path d="m21 3-7 18-4-8-8-4Z" />
            <path d="m10 13 11-10" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-search`} viewBox="0 0 24 24">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-sliders`} viewBox="0 0 24 24">
            <path d="M4 7h9m4 0h3M4 17h3m4 0h9" />
            <circle cx="15" cy="7" r="2" />
            <circle cx="9" cy="17" r="2" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-check`} viewBox="0 0 24 24">
            <path d="m5 12 4 4L19 6" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-chevron`} viewBox="0 0 24 24">
            <path d="m8 4 8 8-8 8" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-down`} viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-arrow`} viewBox="0 0 24 24">
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-arrow-up`} viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6h12v12" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-star`} viewBox="0 0 24 24">
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-inbox`} viewBox="0 0 24 24">
            <path d="M4 5h16l1 11v3H3v-3L4 5Z" />
            <path d="M3 14h5l2 3h4l2-3h5" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-clock`} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-file`} viewBox="0 0 24 24">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
            <path d="M14 3v6h6M8 14h8M8 17h5" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-menu`} viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-plus`} viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-refresh`} viewBox="0 0 24 24">
            <path d="M20 11a8 8 0 1 0-2 6M20 4v7h-7" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-lock`} viewBox="0 0 24 24">
            <rect x="5" y="10" width="14" height="11" rx="3" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            <path d="M12 14v3" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-grid`} viewBox="0 0 24 24">
            <rect x="3" y="3" width="5" height="5" rx="1" />
            <rect x="16" y="3" width="5" height="5" rx="1" />
            <rect x="3" y="16" width="5" height="5" rx="1" />
            <rect x="16" y="16" width="5" height="5" rx="1" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-external`} viewBox="0 0 24 24">
            <path d="M14 3h7v7m0-7-11 11M10 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-users`} viewBox="0 0 24 24">
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 4v2" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-shield`} viewBox="0 0 24 24">
            <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" />
            <path d="m8 12 3 3 5-6" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-gauge`} viewBox="0 0 24 24">
            <path d="M4.5 19a9 9 0 1 1 15 0" />
            <path d="m12 13 4-5M5 14h1M7 7l1 1M12 4v1M19 14h-1" />
            <circle cx="12" cy="14" r="1.5" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-trash`} viewBox="0 0 24 24">
            <path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-dots`} viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-spark`} viewBox="0 0 24 24">
            <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-sun`} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-moon`} viewBox="0 0 24 24">
            <path d="M20.5 14A8.6 8.6 0 0 1 10 3.5 8.6 8.6 0 1 0 20.5 14Z" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-pencil`} viewBox="0 0 24 24">
            <path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14Z" />
          </symbol>
          <symbol id={`${symbolPrefix}-lee-i-settings`} viewBox="0 0 24 24">
            <path d="m9 3-.6 3-2.8 1-2.7-.9-1.5 2.6 2.1 2.1v3l-2.1 2.1 1.5 2.6 2.7-.9 2.8 1 .6 3h3l.6-3 2.8-1 2.7.9 1.5-2.6-2.1-2.1v-3l2.1-2.1-1.5-2.6-2.7.9-2.8-1-.6-3Z" />
            <circle cx="10.5" cy="12" r="3" />
          </symbol>
        </defs>
      </svg>
      <div className="lee-artboard" aria-hidden="true">
        <div className="lee-backdrop">
          <div className="lee-ambient"></div>
          <div className="lee-orbit lee-orbit--one"></div>
          <div className="lee-orbit lee-orbit--two"></div>
        </div>

        {/* <div className="lee-workflow-label">
          <span className="lee-linkedin-mark">in</span>
          <span>Find your people</span>
          <svg
            className="lee-icon "
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <use href={`#${symbolPrefix}-lee-i-arrow`} />
          </svg>
          <span>Start a conversation</span>
        </div> */}

        {/* The browser window is the main visual; floating cards are siblings, not clipped children. */}
        <div className="lee-browser">
          <div className="lee-tabbar">
            <div className="lee-window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="lee-browser-tab">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-mail`} />
              </svg>
              <span>Your outreach, connected</span>
              <span className="lee-tab-close">&times;</span>
            </div>
            <svg
              className="lee-icon lee-new-tab"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-plus`} />
            </svg>
          </div>
          <div className="lee-addressbar">
            <svg
              className="lee-icon lee-back"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-arrow`} />
            </svg>
            <svg
              className="lee-icon lee-forward"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-arrow`} />
            </svg>
            <svg
              className="lee-icon "
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-refresh`} />
            </svg>
            <div className="lee-address">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-lock`} />
              </svg>
              <span>mail.google.com/mail/u/0/#sent</span>
            </div>
            <span className="lee-extension-button">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-send`} />
              </svg>
            </span>
            <svg
              className="lee-icon "
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-dots`} />
            </svg>
          </div>

          <div className="lee-workspace">
            {/* Recreated interface, not a screenshot: text and layout stay editable. */}
            <div className="lee-mail-app">
              <div className="lee-mail-header">
                <div className="lee-gmail-brand">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-menu`} />
                  </svg>
                  <span className="lee-gmail-mark">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-mail`} />
                    </svg>
                  </span>
                  <span>Gmail</span>
                </div>
                <div className="lee-mail-search">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-search`} />
                  </svg>
                  <span>Search mail</span>
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-sliders`} />
                  </svg>
                </div>
                <span className="lee-profile">JD</span>
              </div>
              <div className="lee-mail-body">
                <div className="lee-mail-sidebar">
                  <div className="lee-compose">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-pencil`} />
                    </svg>
                    <span>Compose</span>
                  </div>
                  <div className="lee-folder">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-inbox`} />
                    </svg>
                    <span>Inbox</span>
                    <small>24</small>
                  </div>
                  <div className="lee-folder">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-star`} />
                    </svg>
                    <span>Starred</span>
                  </div>
                  <div className="lee-folder">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-clock`} />
                    </svg>
                    <span>Snoozed</span>
                  </div>
                  <div className="lee-folder lee-folder--active">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-send`} />
                    </svg>
                    <span>Sent</span>
                    <small>{selectedContacts}</small>
                  </div>
                  <div className="lee-folder">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-file`} />
                    </svg>
                    <span>Drafts</span>
                    <small>3</small>
                  </div>
                  <div className="lee-sidebar-label">
                    Labels{" "}
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-plus`} />
                    </svg>
                  </div>
                  <div className="lee-label-item">
                    <span></span>Referrals
                  </div>
                  <div className="lee-label-item">
                    <span></span>Outreach
                  </div>
                </div>
                <div className="lee-inbox">
                  <div className="lee-inbox-heading">
                    <div>
                      <h3>Sent</h3>
                      <p>Good conversations start here.</p>
                    </div>
                    <span className="lee-inbox-count">
                      1&ndash;50 of {selectedContacts}
                    </span>
                  </div>
                  <div className="lee-mail-toolbar">
                    <span className="lee-empty-check"></span>
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-down`} />
                    </svg>
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-refresh`} />
                    </svg>
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-dots`} />
                    </svg>
                    <span className="lee-filter">
                      <svg
                        className="lee-icon "
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-file`} />
                      </svg>{" "}
                      Has attachment
                    </span>
                  </div>
                  <div className="lee-messages">
                    <div className="lee-mail-row">
                      <span className="lee-empty-check"></span>
                      <svg
                        className="lee-icon lee-star"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-star`} />
                      </svg>
                      <div className="lee-message">
                        <div className="lee-message-meta">
                          <span>To: alex</span>
                          <span>10:42</span>
                        </div>
                        <div className="lee-message-subject">
                          Referral request{" "}
                          <span>&mdash; Software Engineer</span>
                        </div>
                        <div className="lee-message-preview">
                          Hi Alex, I came across your profile...
                        </div>
                        <span className="lee-attachment">
                          <svg
                            className="lee-icon "
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href={`#${symbolPrefix}-lee-i-file`} />
                          </svg>
                          <span>Resume.pdf</span>
                        </span>
                      </div>
                    </div>
                    <div className="lee-mail-row">
                      <span className="lee-empty-check"></span>
                      <svg
                        className="lee-icon lee-star"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-star`} />
                      </svg>
                      <div className="lee-message">
                        <div className="lee-message-meta">
                          <span>To: sam</span>
                          <span>10:42</span>
                        </div>
                        <div className="lee-message-subject">
                          Referral request{" "}
                          <span>&mdash; Software Engineer</span>
                        </div>
                        <div className="lee-message-preview">
                          Hi Sam, I came across your profile...
                        </div>
                        <span className="lee-attachment">
                          <svg
                            className="lee-icon "
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href={`#${symbolPrefix}-lee-i-file`} />
                          </svg>
                          <span>Resume.pdf</span>
                        </span>
                      </div>
                    </div>
                    <div className="lee-mail-row">
                      <span className="lee-empty-check"></span>
                      <svg
                        className="lee-icon lee-star"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-star`} />
                      </svg>
                      <div className="lee-message">
                        <div className="lee-message-meta">
                          <span>To: jordan</span>
                          <span>10:41</span>
                        </div>
                        <div className="lee-message-subject">
                          Referral request{" "}
                          <span>&mdash; Software Engineer</span>
                        </div>
                        <div className="lee-message-preview">
                          Hi Jordan, I came across your profile...
                        </div>
                        <span className="lee-attachment">
                          <svg
                            className="lee-icon "
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href={`#${symbolPrefix}-lee-i-file`} />
                          </svg>
                          <span>Resume.pdf</span>
                        </span>
                      </div>
                    </div>
                    <div className="lee-mail-row">
                      <span className="lee-empty-check"></span>
                      <svg
                        className="lee-icon lee-star"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-star`} />
                      </svg>
                      <div className="lee-message">
                        <div className="lee-message-meta">
                          <span>To: taylor</span>
                          <span>10:41</span>
                        </div>
                        <div className="lee-message-subject">
                          Referral request{" "}
                          <span>&mdash; Software Engineer</span>
                        </div>
                        <div className="lee-message-preview">
                          Hi Taylor, I came across your profile...
                        </div>
                        <span className="lee-attachment">
                          <svg
                            className="lee-icon "
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href={`#${symbolPrefix}-lee-i-file`} />
                          </svg>
                          <span>Resume.pdf</span>
                        </span>
                      </div>
                    </div>
                    <div className="lee-mail-row">
                      <span className="lee-empty-check"></span>
                      <svg
                        className="lee-icon lee-star"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-star`} />
                      </svg>
                      <div className="lee-message">
                        <div className="lee-message-meta">
                          <span>To: casey</span>
                          <span>10:40</span>
                        </div>
                        <div className="lee-message-subject">
                          Referral request{" "}
                          <span>&mdash; Software Engineer</span>
                        </div>
                        <div className="lee-message-preview">
                          Hi Casey, I came across your profile...
                        </div>
                        <span className="lee-attachment">
                          <svg
                            className="lee-icon "
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href={`#${symbolPrefix}-lee-i-file`} />
                          </svg>
                          <span>Resume.pdf</span>
                        </span>
                      </div>
                    </div>
                    <div className="lee-mail-row">
                      <span className="lee-empty-check"></span>
                      <svg
                        className="lee-icon lee-star"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${symbolPrefix}-lee-i-star`} />
                      </svg>
                      <div className="lee-message">
                        <div className="lee-message-meta">
                          <span>To: avery</span>
                          <span>10:40</span>
                        </div>
                        <div className="lee-message-subject">
                          Referral request{" "}
                          <span>&mdash; Software Engineer</span>
                        </div>
                        <div className="lee-message-preview">
                          Hi Avery, I came across your profile...
                        </div>
                        <span className="lee-attachment">
                          <svg
                            className="lee-icon "
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href={`#${symbolPrefix}-lee-i-file`} />
                          </svg>
                          <span>Resume.pdf</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lee-mail-footnote">
                    <svg
                      className="lee-icon "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${symbolPrefix}-lee-i-lock`} />
                    </svg>{" "}
                    Your inbox. Your connections.
                  </div>
                </div>
              </div>
            </div>

            {/* Default: dark contacts panel. Set panelTheme='inherit' to follow the page theme. */}
          </div>
        </div>
        <div className={`lee-panel${panelTheme === "dark" ? " dark" : ""}`}>
          <div className="lee-panel-heading">
            <span className="lee-product-icon">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-send`} />
              </svg>
            </span>
            <strong>PaceMailer</strong>
            <span className="lee-panel-menu">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-dots`} />
              </svg>
            </span>
          </div>
          <div className="lee-panel-tabs">
            <span className="lee-panel-tab lee-panel-tab--active">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-users`} />
              </svg>{" "}
              Data
            </span>
            <span className="lee-panel-tab">
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-file`} />
              </svg>{" "}
              Templates
            </span>
          </div>
          <div className="lee-panel-content">
            <div className="lee-contacts-heading">
              <span className="lee-contact-icon">
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-users`} />
                </svg>
              </span>
              <div>
                <h3>
                  Contact details <span>{collectedContacts}</span>
                </h3>
                <p>Collected in the last 24 hours</p>
              </div>
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-down`} />
              </svg>
            </div>
            <div className="lee-contact-tools">
              <span className="lee-contact-search">
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-search`} />
                </svg>
                <span>Search contacts...</span>
              </span>
              <span className="lee-rate">
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-gauge`} />
                </svg>
                <strong>{mailsPerHour} mails/hr</strong>
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-down`} />
                </svg>
              </span>
            </div>
            <div className="lee-selection-actions">
              <span className="lee-delete">
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-trash`} />
                </svg>{" "}
                Delete ({selectedContacts})
              </span>
              <span className="lee-send-button">
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-send`} />
                </svg>{" "}
                Send email <span>{selectedContacts}</span>
              </span>
            </div>
            <div className="lee-verify-banner">
              <span className="lee-verify-icon">
                <svg
                  className="lee-icon "
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href={`#${symbolPrefix}-lee-i-shield`} />
                </svg>
              </span>
              <div>
                <strong>A little check. A better connection.</strong>
                <p>Verify emails before sending.</p>
              </div>
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-arrow`} />
              </svg>
            </div>
            <div className="lee-contacts-table">
              <div className="lee-table-heading">
                <span className="lee-check">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-check`} />
                  </svg>
                </span>
                <span>Name / Email</span>
                <span>Company</span>
              </div>
              <div className="lee-contact-row">
                <span className="lee-check">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-check`} />
                  </svg>
                </span>
                <div className="lee-person">
                  <span className="lee-avatar lee-avatar--violet">AM</span>
                  <span>
                    <strong>Alex Morgan</strong>
                    <small>alex@northstar.example</small>
                  </span>
                </div>
                <span className="lee-company">Northstar</span>
              </div>
              <div className="lee-contact-row">
                <span className="lee-check">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-check`} />
                  </svg>
                </span>
                <div className="lee-person">
                  <span className="lee-avatar lee-avatar--green">SR</span>
                  <span>
                    <strong>Sam Rivera</strong>
                    <small>sam@acme.example</small>
                  </span>
                </div>
                <span className="lee-company">Acme</span>
              </div>
              <div className="lee-contact-row">
                <span className="lee-check">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-check`} />
                  </svg>
                </span>
                <div className="lee-person">
                  <span className="lee-avatar lee-avatar--blue">JL</span>
                  <span>
                    <strong>Jordan Lee</strong>
                    <small>jordan@orbit.example</small>
                  </span>
                </div>
                <span className="lee-company">Orbit</span>
              </div>
              <div className="lee-contact-row">
                <span className="lee-check">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-check`} />
                  </svg>
                </span>
                <div className="lee-person">
                  <span className="lee-avatar lee-avatar--violet">TC</span>
                  <span>
                    <strong>Taylor Chen</strong>
                    <small>taylor@lumen.example</small>
                  </span>
                </div>
                <span className="lee-company">Lumen</span>
              </div>
              <div className="lee-contact-row">
                <span className="lee-check">
                  <svg
                    className="lee-icon "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`#${symbolPrefix}-lee-i-check`} />
                  </svg>
                </span>
                <div className="lee-person">
                  <span className="lee-avatar lee-avatar--green">CP</span>
                  <span>
                    <strong>Casey Patel</strong>
                    <small>casey@vertex.example</small>
                  </span>
                </div>
                <span className="lee-company">Vertex</span>
              </div>
            </div>
            <div className="lee-panel-footer">
              <span>
                <i></i> {selectedContacts} contacts selected
              </span>
              <span>{collectedContacts} total</span>
            </div>
          </div>
        </div>

        {/* Floating callouts: alternative to the application counter in the reference. */}
        {/* <div className="lee-floating lee-ready-card">
          <span className="lee-ready-icon">
            <svg
              className="lee-icon "
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-send`} />
            </svg>
          </span>
          <div>
            <strong>{selectedContacts} contacts selected</strong>
            <span>Personalize. Verify. Send.</span>
          </div>
          <span className="lee-ready-check">
            <svg
              className="lee-icon "
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-check`} />
            </svg>
          </span>
        </div> */}

        <div className="lee-floating lee-collection-card">
          <div className="lee-collection-title">
            <span>Contacts collected</span>
            <span>
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-arrow-up`} />
              </svg>
            </span>
          </div>
          <div className="lee-collection-metric">
            {collectedContacts}
            <span>
              <svg
                className="lee-icon "
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <use href={`#${symbolPrefix}-lee-i-users`} />
              </svg>
            </span>
          </div>
          <p>New connections. More possibilities.</p>
          <div className="lee-collection-divider"></div>
          <div className="lee-collection-footer">
            <div className="lee-avatar-stack">
              <span>AM</span>
              <span>SR</span>
              <span>JL</span>
              <span>+</span>
            </div>
            <div>
              <strong>Your next hello</strong>
              <small>starts on LinkedIn</small>
            </div>
          </div>
        </div>

        {/* <div className="lee-floating lee-verification-card">
          <span className="lee-verification-icon">
            <svg
              className="lee-icon "
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <use href={`#${symbolPrefix}-lee-i-shield`} />
            </svg>
          </span>
          <div>
            <strong>Verify before you send.</strong>
            <span>Make every connection count.</span>
          </div>
          <svg
            className="lee-icon lee-verification-spark"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <use href={`#${symbolPrefix}-lee-i-spark`} />
          </svg>
        </div> */}
        {/* <div className="lee-bottom-note">
          <span></span>FROM A PROFILE TO A PERSONAL EMAIL<span></span>
        </div> */}
      </div>
    </figure>
  );
}
