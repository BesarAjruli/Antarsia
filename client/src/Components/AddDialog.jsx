import { forwardRef } from "react";

const AddDialog = forwardRef(({}, ref) => {
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
        <form method="post">
          <span>Shto antar te ri</span>
          <div className="mainCont">
            <div>
              <div>
                <label htmlFor="emri">Emri</label>
                <input type="text" id="emri" name="emri" />
              </div>
              <div>
                <label htmlFor="mbiemri"></label>
                <input type="text" id="mbiemri" name="mbiemri" />
              </div>
              <div>
                <label htmlFor="ktg">Kategoria</label>
                <select name="ktg" id="ktg">
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="rryma">Rryma</label>
                <input type="number" id="rryma" name="rryma"/>
              </div>
              <div>
                <label htmlFor="varrezat">Varrezat</label>
                <input type="number" id="varrezat" name="varrezat"/>
              </div>
              <div>
                <label htmlFor="ekstra">Ekstra</label>
                <input type="number" id="ekstra" name="ekstra"/>
              </div>
            </div>
          </div>
          <button></button>
        </form>
      </dialog>
    </>
  );
});

export default AddDialog;
