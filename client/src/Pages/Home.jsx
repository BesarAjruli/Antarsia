/*const Lista = [
  {
    id: 0,
    emri: "Ardit",
    mbiemri: "Krasniqi",
    kategoria: "4",
    viti: "2026",
    rryma: "800",
    varrezat: "300",
    ekstra: "1000",
  },
  {
    id: 1,
    emri: "Besart",
    mbiemri: "Ismaili",
    kategoria: "2",
    viti: "2026",
    rryma: "750",
    varrezat: "260",
    ekstra: "900",
  },
  {
    id: 2,
    emri: "Erion",
    mbiemri: "Dreshaj",
    kategoria: "1",
    viti: "2026",
    rryma: "820",
    varrezat: "310",
    ekstra: "700",
  },
  {
    id: 3,
    emri: "Granit",
    mbiemri: "Morina",
    kategoria: "3",
    viti: "2026",
    rryma: "790",
    varrezat: "280",
    ekstra: "650",
  },
  {
    id: 4,
    emri: "Altin",
    mbiemri: "Berisha",
    kategoria: "4",
    viti: "2026",
    rryma: "900",
    varrezat: "350",
    ekstra: "1200",
  },
  {
    id: 5,
    emri: "Luan",
    mbiemri: "Gashi",
    kategoria: "2",
    viti: "2026",
    rryma: "705",
    varrezat: "240",
    ekstra: "500",
  },
  {
    id: 6,
    emri: "Valon",
    mbiemri: "Hoxha",
    kategoria: "1",
    viti: "2026",
    rryma: "860",
    varrezat: "295",
    ekstra: "1100",
  },
  {
    id: 7,
    emri: "Elton",
    mbiemri: "Rexhepi",
    kategoria: "3",
    viti: "2026",
    rryma: "780",
    varrezat: "270",
    ekstra: "980",
  },
  {
    id: 8,
    emri: "Arlind",
    mbiemri: "Shabani",
    kategoria: "4",
    viti: "2026",
    rryma: "820",
    varrezat: "330",
    ekstra: "1300",
  },
  {
    id: 9,
    emri: "Blendi",
    mbiemri: "Tahiri",
    kategoria: "2",
    viti: "2026",
    rryma: "760",
    varrezat: "250",
    ekstra: "600",
  },
  {
    id: 10,
    emri: "Arben",
    mbiemri: "Mehmeti",
    kategoria: "1",
    viti: "2026",
    rryma: "880",
    varrezat: "340",
    ekstra: "1400",
  },
  {
    id: 11,
    emri: "Mentor",
    mbiemri: "Hasani",
    kategoria: "3",
    viti: "2026",
    rryma: "770",
    varrezat: "260",
    ekstra: "950",
  },
  {
    id: 12,
    emri: "Arsim",
    mbiemri: "Zeneli",
    kategoria: "2",
    viti: "2026",
    rryma: "810",
    varrezat: "300",
    ekstra: "1150",
  },
  {
    id: 13,
    emri: "Fisnik",
    mbiemri: "Jakupi",
    kategoria: "1",
    viti: "2026",
    rryma: "860",
    varrezat: "290",
    ekstra: "700",
  },
  {
    id: 14,
    emri: "Ilir",
    mbiemri: "Beqiri",
    kategoria: "4",
    viti: "2026",
    rryma: "900",
    varrezat: "350",
    ekstra: "1300",
  },
  {
    id: 15,
    emri: "Kreshnik",
    mbiemri: "Rama",
    kategoria: "2",
    viti: "2026",
    rryma: "740",
    varrezat: "255",
    ekstra: "820",
  },
  {
    id: 16,
    emri: "Ardian",
    mbiemri: "Osmani",
    kategoria: "3",
    viti: "2026",
    rryma: "790",
    varrezat: "275",
    ekstra: "910",
  },
  {
    id: 17,
    emri: "Rron",
    mbiemri: "Bajrami",
    kategoria: "4",
    viti: "2026",
    rryma: "830",
    varrezat: "325",
    ekstra: "1250",
  },
  {
    id: 18,
    emri: "Altin",
    mbiemri: "Selimi",
    kategoria: "1",
    viti: "2026",
    rryma: "880",
    varrezat: "345",
    ekstra: "1000",
  },
  {
    id: 19,
    emri: "Driton",
    mbiemri: "Aliu",
    kategoria: "2",
    viti: "2026",
    rryma: "760",
    varrezat: "265",
    ekstra: "890",
  },
  {
    id: 20,
    emri: "Flamur",
    mbiemri: "Rexha",
    kategoria: "3",
    viti: "2026",
    rryma: "800",
    varrezat: "310",
    ekstra: "1020",
  },
  {
    id: 21,
    emri: "Leonard",
    mbiemri: "Miftari",
    kategoria: "4",
    viti: "2026",
    rryma: "920",
    varrezat: "360",
    ekstra: "1400",
  },
  {
    id: 22,
    emri: "Egzon",
    mbiemri: "Shala",
    kategoria: "1",
    viti: "2026",
    rryma: "870",
    varrezat: "295",
    ekstra: "960",
  },
  {
    id: 23,
    emri: "Blerim",
    mbiemri: "Hajrizi",
    kategoria: "2",
    viti: "2026",
    rryma: "745",
    varrezat: "250",
    ekstra: "780",
  },
  {
    id: 24,
    emri: "Ermal",
    mbiemri: "Kryeziu",
    kategoria: "3",
    viti: "2026",
    rryma: "795",
    varrezat: "285",
    ekstra: "910",
  },
  {
    id: 25,
    emri: "Liridon",
    mbiemri: "Pula",
    kategoria: "4",
    viti: "2026",
    rryma: "850",
    varrezat: "320",
    ekstra: "1200",
  },
  {
    id: 26,
    emri: "Drilon",
    mbiemri: "Gjemajli",
    kategoria: "2",
    viti: "2026",
    rryma: "735",
    varrezat: "245",
    ekstra: "650",
  },
  {
    id: 27,
    emri: "Jetmir",
    mbiemri: "Latifi",
    kategoria: "1",
    viti: "2026",
    rryma: "890",
    varrezat: "340",
    ekstra: "1100",
  },
  {
    id: 28,
    emri: "Visar",
    mbiemri: "Dauti",
    kategoria: "3",
    viti: "2026",
    rryma: "785",
    varrezat: "275",
    ekstra: "880",
  },
  {
    id: 29,
    emri: "Endrit",
    mbiemri: "Spahiu",
    kategoria: "4",
    viti: "2026",
    rryma: "915",
    varrezat: "355",
    ekstra: "1320",
  },
  {
    id: 30,
    emri: "Arlind",
    mbiemri: "Shyti",
    kategoria: "2",
    viti: "2026",
    rryma: "755",
    varrezat: "260",
    ekstra: "820",
  },
];*/

import Header from "../Components/Header";
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
        const res = await fetch("http://localhost:8095/api/auth/user", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setUser(data);

        if (!data || !data?.id) navigate('/login')
      } catch (err) {
        console.log(err);
      }
    };

    const getMembers = async () => {
      try {
        const res = await fetch("http://localhost:8095/api/members/", {
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
              <Add addDialog={addDialog} />
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
      <AddDialog ref={addDialog} />
    </>
  );
}

export default Home;
