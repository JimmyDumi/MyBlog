import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 100%;
  max-width: 900px; /* Adjust this value to your desired content width */
  margin: 50px auto 0 auto; /* Automatically centers the box horizontally */
  padding: 16px; /* Adds some internal spacing inside the content box */
  box-sizing: border-box; /* Ensures padding is included in the overall width */
  background-color: #f9f9f9; /* Example background color, adjust as needed */
  border: 1px solid #ddd; /* Example border, adjust or remove as needed */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function ThreeJS() {
  return (
    <>
      <div>ThreeJS Getting Started</div>
      <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
        <iframe
          title="Embedded External Homepage"
          src="https://jimmydumi.github.io/ThreeJS-TypeScript-BoilerPlate/" // Replace with the URL of the external homepage
          style={{
            width: "100%",
            height: "600px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

function Content() {
  return (
    <>
      <ContentDiv>
        <ThreeJS />
      </ContentDiv>
    </>
  );
}

export default Content;
