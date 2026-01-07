const pool = require("../config/db");

// 1️ Krijimi i një antari
exports.createMember = async (req, res) => {
const {
    emri,
    mbiemri,
    kategoria_pageses,
    viti_pageses,
    pagesa_rymes,
    fondi_varrezave,
    fondi_xhamine
} = req.body;
try {
    const result = await pool.query(
    `INSERT INTO members
    (emri, mbiemri, kategoria_pageses, viti_pageses,
    pagesa_rymes, fondi_varrezave, fondi_xhamine)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
    [
        emri,
        mbiemri,
        kategoria_pageses,
        viti_pageses,
        pagesa_rymes,
        fondi_varrezave,
        fondi_xhamine
    ]
    );
    res.json(result.rows[0]);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating member" });
}
};

// 2️ Shfaqja e listës me search dhe pagination
exports.getMembers = async (req, res) => {
const { page = 1, search = "" } = req.query;
const limit = 15;
const offset = (page - 1) * limit;

try {
const result = await pool.query(
    `SELECT * FROM members
    WHERE CAST(id AS TEXT) ILIKE $1
    OR emri ILIKE $1
        OR mbiemri ILIKE $1
        OR kategoria_pageses ILIKE $1
        OR CAST(viti_pageses AS TEXT) ILIKE $1
    ORDER BY id DESC
    LIMIT $2 OFFSET $3`,
    [`%${search}%`, limit, offset]
    );

    res.json(result.rows);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving members" });
}
};

// 3️ Shfaqja e një antari të vetëm
exports.getMemberById = async (req, res) => {
const { id } = req.params;

try {
    const result = await pool.query(
      "SELECT * FROM members WHERE id = $1",
    [id]
    );

    if (result.rows.length === 0) {
    return res.status(404).json({ message: "member not found" });
}
    res.json(result.rows[0]);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving member" });
}
};

// 4️ Editimi i një antari
exports.updateMember = async (req, res) => {
const { id } = req.params;
const {
    emri,
    mbiemri,
    kategoria_pageses,
    viti_pageses,
    pagesa_rymes,
    fondi_varrezave,
    fondi_xhamine
} = req.body;

try {
const result = await pool.query(
    `UPDATE members SET
        emri = $1,
        mbiemri = $2,
        kategoria_pageses = $3,
        viti_pageses = $4,
        pagesa_rymes = $5,
        fondi_varrezave = $6,
        fondi_xhamine = $7
    WHERE id = $8
       RETURNING *`,
    [
        emri,
        mbiemri,
        kategoria_pageses,
        viti_pageses,
        pagesa_rymes,
        fondi_varrezave,
        fondi_xhamine,
        id
    ]
    );

    if (result.rows.length === 0) {
    return res.status(404).json({ message: "member not found" });
    }

    res.json(result.rows[0]);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "error editing member" });
}
};

// 5️ Fshirja e një antari
exports.deleteMember = async (req, res) => {
const { id } = req.params;

try {
    const result = await pool.query(
      "DELETE FROM members WHERE id = $1 RETURNING *",
    [id]
    );

    if (result.rows.length === 0) {
    return res.status(404).json({ message: "member not found" });
    }

    res.json({
    message: "member deleted succesfuly",
    deletedMember: result.rows[0]
    });
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "error deleting member" });
}
};
