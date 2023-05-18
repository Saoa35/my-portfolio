import React from "react";

export const Contacts = (): React.JSX.Element => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Poltava, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+380666784893">+38 (066) 6784893</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:saoamah@gmail.com">saoamah@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
