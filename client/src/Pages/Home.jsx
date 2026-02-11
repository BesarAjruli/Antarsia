import Header from "../Components/Header"
import Banner from "../Components/Banner";
import Add from "../Components/Add";
import MemberDialog from "../Components/MemberDialog";
import AddDialog from "../Components/AddDialog";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";

import "./Home.css";

function Home() {
  //Per navigim
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [members, setMmbers] = useState([])
  const [memberId, setmemberId] = useState();

  //Vetem 15 antar per faqe
  const pageSize = 15;
  const [page, setPage] = useState(1);

  const antaret = members.slice((page - 1) * pageSize, page * pageSize);

  //Per searchin
  const [searchList, setSearchList] = useState([]);

  const search = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filtered = members.filter((item) =>
      item.emri.toLowerCase().includes(searchText),
    );

    setSearchList(filtered);
  };

  //Dialogs
  const memberDialog = useRef();
  const addDialog = useRef();

  //Nese eshte mob
  const isMobile = useMediaQuery({ maxWidth: 768 });

  //fetch user id nga cookies nese eshte log
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("/api/auth/user", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (!data || !data?.id) navigate('/login')

        setUser(data);

      } catch (err) {
        console.log('Login failed');
      }
    };

    const getMembers = async () => {
      try {
        const res = await fetch("/api/members/", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setMmbers(data);
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
    getMembers()
  }, []);

  const printList = async () => {
    try {
      const response = await fetch(
        `/api/pdf/members`,
        {
          credentials: "include",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Open PDF in a new tab
      const printWindow = window.open(url);
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print(); // Trigger browser print dialog
      };
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <Banner userName={user?.name} />

      {/*Search bari */}
      <div className="searchCont">
        <form className="search">
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Kerko antar me id, emer, kategori ose vitin e pageses"
            required=""
            type="text"
            onChange={(e) => search(e)}
          />
          <button className="reset" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      {/*Tabela me antar*/}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{isMobile ? "Antari" : "Emri dhe Mbiemri"}</th>
            <th>Kategoria</th>
            <th>Viti</th>
            <th>{isMobile ? "Ekstra" : "Shume Ekstra"}</th>
          </tr>
        </thead>
        <tbody>
          {(searchList.length > 0 ? searchList : antaret).map((element, i) => (
            <tr
              key={element.id}
              onClick={() => {
                memberDialog.current.showModal()
                setmemberId(i)
              }}
            >
              <td>{i}</td>
              <td>
                {element.emri} {element.mbiemri}
              </td>
              <td>{element.kategoria_pageses}</td>
              <td>{element.viti_pageses}</td>
              <td>
                {Number(element.pagesa_rymes) +
                  Number(element.fondi_varrezave) +
                  Number(element.fondi_xhamine)}{" "}
                den.
              </td>
            </tr>
          ))}
        </tbody>
        {/*Pjesa per te shtuar ose printim*/}
        <tfoot>
          <tr>
            <td colSpan={5} className="addCont">
              <Add addDialog={addDialog} printList={printList}/>
            </td>
          </tr>
        </tfoot>
      </table>

      {/*Ndryshon faqet*/}
      <div className="changePage">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span>{page}</span>
        <button
          disabled={page * pageSize >= members.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      <MemberDialog ref={memberDialog} data={members} id={memberId}/>
      <AddDialog ref={addDialog}/>
    </>
  );
}

export default Home;
