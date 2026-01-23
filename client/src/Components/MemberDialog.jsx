import "./MemberDialog.css";
import { forwardRef } from "react";
import Icon from "@mdi/react";
import { mdiDelete, mdiPrinter, mdiPencil } from "@mdi/js";
import { useMediaQuery } from "react-responsive";

const MemberDialog = forwardRef(({data, id}, ref) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log(id, data[id]?.emri)

  return (
    <>
      <dialog ref={ref}>
        {/*Close Icon*/}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => ref.current.close()}>
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
        <div>
          <div>
            {/*Emri dhe Mbiemri (Besar Ajruli)*/}
            <span className="dialogEmri">{data[id]?.emri} {data[id]?.mbiemri}</span>
          </div>
          <div>
            {/*Te dhenat e antarit*/}
            <ul>
              <li>Viti: {data[id]?.viti_pageses}</li>
              <li>Kategoria: {data[id]?.kategoria_pageses}</li>
              <li>Rryma: {data[id]?.pagesa_rymes}</li>
              <li>Varrezat: {data[id]?.fondi_varrezave}</li>
              <li>Shume ekstra: {data[id]?.fondi_xhamine}</li>
            </ul>
          </div>
          <div>
            <span>Deshiron te ndryshosh diçka?</span>
          </div>
          <div>
            <button style={{backgroundColor: 'red'}}>{isMobile? <Icon className="memberDlgIcons" path={mdiDelete}/> : "Fshij"}</button>
            <button style={{backgroundColor: '#dfc013ff'}}>{isMobile? <Icon className="memberDlgIcons" path={mdiPrinter}/> : "Printo"}</button>
            <button style={{backgroundColor: 'green'}}>{isMobile? <Icon className="memberDlgIcons" path={mdiPencil}/> : "Ndrysho"}</button>
          </div>
        </div>
      </dialog>
    </>
  );
})

export default MemberDialog;
