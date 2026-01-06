const PDFDocument = require("pdfkit");
const pool = require("../config/db");

// PDF e gjithe antarve
exports.generateAllMembersPDF = async (req , res) => {
    try {
        const result = await pool.query("SELECT * FROM members ORDER BY id DESC ");

        const doc = new PDFDocument({margin: 30, size:"A4"});

        //header
        res.setHeader("Content-Disposition", "attachment; filename=members.pdf");
        res.setHeader("Content-Type", "application/pdf");
        doc.pipe(res);

        doc.fontSize(18).text("Lista e Antarve", {align: "center"});
        doc.moveDown();

        //table headers
        doc.fontSize(12);
        doc.text(
            "ID | Emri | Mbiemri | Kategoria | Viti | Pagesa Rrymes | Fondi Varrezave | Fondi Xhamine"
        );
        doc.moveDown(0.5);

        //data
        result.rows.forEach((m) => {
            doc.text(
                `${m.id} | ${m.emri} | ${m.mbiemri} | ${m.kategoria_pageses} | ${m.viti_pageses} | ${m.pagesa_rymes} | ${m.fondi_varrezave} | ${m.fondi_xhamine}`
            );
        });
        doc.end();
    } catch (err) {
        console.error(err);
        res.status(500).json({message:"Error generating PDF"});
    }
};

// PDF vetem per 1 antar
exports.generateMemberPDF = async (req , res) => {
    const {id} = req.params;

    try{
        const result = await pool.query("SELECT * FROM members WHERE id = $1", [id]);
        if(result.rows.length === 0) {
            return res.status(404).json({message: "member not found"});
        }
        const m = result.rows[0];
        const doc = new PDFDocument({margin: 30, size:"A4"});

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=member_${m.id}.pdf`
        );
        res.setHeader("Content-Type", "application/pdf");
        doc.pipe(res);

        doc.fontSize(18).text(`Antari ID: ${m.id}`, { align: "center" });
        doc.moveDown();

        doc.fontSize(14).text(`Emri: ${m.emri}`);
        doc.text(`Mbiemri: ${m.mbiemri}`);
        doc.text(`Kategoria e pageses: ${m.kategoria_pageses}`);
        doc.text(`Viti i pageses: ${m.viti_pageses}`);
        doc.text(`Pagesa per rrymen: ${m.pagesa_rymes}`);
        doc.text(`Fondi i varrezave: ${m.fondi_varrezave}`);
        doc.text(`Fondi ekstra per xhamine: ${m.fondi_xhamine}`);
    
        doc.end();
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Error generating PDF"});
    }
}
