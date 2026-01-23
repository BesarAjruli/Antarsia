import { forwardRef } from "react";
import "./AddDialog.css";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import { useState } from "react";

const AddDialog = forwardRef(({}, ref) => {
  const [formData, setFormData] = useState({
    emri: "",
    mbiemri: "",
    kategoria_pageses: "1",
    viti_pageses: "",
    pagesa_rymes: "",
    fondi_varrezave: "",
    fondi_xhamine: "",
  });

  //Per ta ndare emrin dhe mbiemrin
  const [emriMbiemri, setEmriMbiemri] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8095/api/members/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      console.log("Response:", data);

      ref.current.close();
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server error");
    }
  };

  return (
    <>
      <dialog ref={ref}>
        {/*Close Icon*/}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => ref.current.close()}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#0F1729"
            ></path>{" "}
          </g>
        </svg>
        <form method="post" onSubmit={submit}>
          <span>Shto antar te ri</span>
          <div className="mainCont">
            <div>
              <div>
                <label htmlFor="emriMbiemri">Emri dhe Mbiemri</label> <br />
                <input
                  type="text"
                  id="emriMbiemri"
                  name="emri"
                  value={emriMbiemri}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmriMbiemri(value);

                    const parts = value.trim().split(" ");
                    setFormData((prev) => ({
                      ...prev,
                      emri: parts[0] || "",
                      mbiemri: parts.slice(1).join(" ") || "",
                    }));
                  }}
                />
              </div>
              <div>
                <label htmlFor="viti_pageses">Viti i pageses</label>
                <br />
                <input
                  type="number"
                  id="viti_pageses"
                  name="viti_pageses"
                  value={formData.viti_pageses}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="kategoria_pageses">Kategoria</label> <br />
                <select
                  name="kategoria_pageses"
                  id="kategoria_pageses"
                  value={formData.kategoria_pageses || '1'}
                  onChange={handleChange}
                >
                  <option value="1">Kategoria I</option>
                  <option value="2">Kategoria II</option>
                  <option value="3">Kategoria III</option>
                  <option value="4">Kategoria IV</option>
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="rryma">Rryma</label>
                <br />
                <input
                  type="number"
                  id="rryma"
                  name="pagesa_rymes"
                  value={formData.pagesa_rymes}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="varrezat">Varrezat</label>
                <br />
                <input
                  type="number"
                  id="varrezat"
                  name="fondi_varrezave"
                  value={formData.fondi_varrezave}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="ekstra">Ekstra</label>
                <br />
                <input
                  type="number"
                  id="ekstra"
                  name="fondi_xhamine"
                  value={formData.fondi_xhamine}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="submitBttnContAddD">
            <button>
              <Icon className="tickIcon" path={mdiCheck} />
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
});

export default AddDialog;
