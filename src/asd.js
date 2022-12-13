import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./App.scss";

const Footer = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);

  const onActive = setActive(!active);
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  const { name, email, description } = form;

  const handleClick = () => setClick(!click);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();
      const body = {
        name,
        email,
        description,
        allow: click,
      };
      alert("pesan berhasil dikirim");
      console.log(body);
      setForm({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      alert("pesan tidak berhasil dikirim");
      console.log(error);
    }
  };

  return (
    <section className="footer">
      <div className="left">
        <h1>Kontak DIGO nihh</h1>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              name="name"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              placeholder="Description"
              value={description}
              name="description"
              onChange={handleOnChange}
            />
            <span className="edit">
              <AiIcons.AiFillEdit />
            </span>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label className="border" onClick={handleClick}>
              {click ? (
                <p className="click">v</p>
              ) : (
                <p className="noclick">v</p>
              )}
              Remember me
            </label>
          </div>
          <button>SEND</button>
        </form>
      </div>
      <div className="right">
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            reprehenderit, facere necessitatibus cum fuga facilis. Commodi,
            magni alias. Nam, quasi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores sed obcaecati, doloremque laboriosam
            quidem officiis dolor porro fugit doloribus veniam!
          </p>
          <div>{/* Isi Icon */}</div>
        </div>
      </div>
      <div className="bottom">
        <div>{/* Isi Icon */}</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
    </section>
  );
};

export default Footer;
