import React from "react";

const companies = [
  "https://www.guvi.in/assets/BeM-RDUa-amazon.webp",
  "https://www.guvi.in/assets/Cjsm_-LY-aspire.webp",
  "https://www.guvi.in/assets/cZULMhV6-just-dial.webp",
  "https://s.yimg.com/fz/api/res/1.2/acA5uxjIsTKBMVTdTWCZpA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/40219526-ddde-39c4-b2ad-984d3b674c78/t_500x300",
  "https://www.guvi.in/assets/CtP46enr-tcs.webp",
  "https://www.guvi.in/assets/CkpaIRuZ-accenture.webp",
  "https://www.guvi.in/assets/C4UufyUF-capgemini.webp",
  "https://www.guvi.in/assets/XLoZqhgX-hcl.webp",
  "https://www.guvi.in/assets/D18imoH7-klenty.webp",
  "https://www.guvi.in/assets/ULW7USSC-tech-mahindra.webp",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Cognizant_logo_2022.svg",
  "https://www.guvi.in/assets/D18imoH7-klenty.webp",
  "https://www.guvi.in/assets/ULW7USSC-tech-mahindra.webp",
];

export default function Companies() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h3 className="mb-4">Where Do Our Students Work?</h3>

        <div className="overflow-hidden">
          <div className="d-flex company-track">
            {companies.concat(companies).map((logo, idx) => (
              <div
                className="mx-4 d-flex align-items-center justify-content-center"
                key={idx}
                style={{ minWidth: "150px" }}
              >
                <img
                  src={logo}
                  alt={`Company ${idx}`}
                  className="img-fluid"
                  style={{ maxHeight: "50px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
