import React from "react";

function generateHTML(htmlString: string): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default generateHTML;
