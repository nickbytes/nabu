import styled from "styled-components";

export const Wrapper = styled.div`
`;

// lazy
export const Content = styled.div`
  body {
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.3125em;
    margin: 30px 0 0;
    padding: 0;
  }

  li {
    font-size: 100%;
  }

  li li {
    font-size: 100%;
  }

  li p {
    font-size: 100%;
    margin: 0.5em 0;
  }

  h1 {
    color: black;
    margin: 0;
    font-size: 1.5em;
    line-height: 0.875em;
    margin-bottom: 0.875em;
  }

  h2 {
    color: #111111;
    margin: 0;
    font-size: 1.375em;
    line-height: 0.9545454545454546em;
    margin-bottom: 0.9545454545454546em;
  }

  h3 {
    color: #111111;
    margin: 0;
    font-size: 1.25em;
    line-height: 1.05em;
    margin-bottom: 1.05em;
  }

  h4 {
    color: #111111;
    margin: 0;
    font-size: 1.125em;
    line-height: 1.1666666666666667em;
    margin-bottom: 1.1666666666666667em;
  }

  h5 {
    color: #111111;
    font-size: 1.15em;
    line-height: 1.3em;
    margin: 1.3em 0;
  }

  h6 {
    font-size: 1em;
    line-height: 1.5em;
    margin: 1.5em 0;
  }

  body,
  p,
  td,
  div {
    color: #111111;
    font-family: sans-serif;
    max-width: 700px;
    word-wrap: break-word;
  }

  a {
    color: #0700d4;
    text-decoration: none;
    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }
  a:hover {
    text-decoration: underline;
  }

  .footnote {
    color: #0700d4;
    font-size: 0.8em;
    vertical-align: super;
  }

  #wrapper img {
    max-width: 100%;
    height: auto;
  }

  dd {
    margin-bottom: 1em;
  }

  li > p:first-child {
    margin: 0;
  }

  ul ul,
  ul ol {
    margin-bottom: 0.4em;
  }

  caption,
  col,
  colgroup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  tr {
    border-spacing: 0;
  }

  table {
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-collapse: collapse;
    display: table;
    empty-cells: hide;
    margin: -1px 0 1.3125em;
    padding: 0;
    table-layout: fixed;
  }

  caption {
    display: table-caption;
    font-weight: 700;
  }

  col {
    display: table-column;
  }

  colgroup {
    display: table-column-group;
  }

  tbody {
    display: table-row-group;
  }

  tfoot {
    display: table-footer-group;
  }

  thead {
    display: table-header-group;
  }

  td,
  th {
    display: table-cell;
  }

  tr {
    display: table-row;
  }

  table th,
  table td {
    font-size: 1.1em;
    line-height: 23px;
    padding: 0 1em;
  }

  table thead {
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  table tbody {
    background: rgba(0, 0, 0, 0.05);
  }

  table tfoot {
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  figure {
    display: inline-block;
    position: relative;
    margin: 1em 0 2em;
  }

  figcaption {
    display: none;
    /* font-style: italic;
    text-align: center;
    background: white;
    color: #666666;
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 98%;
    padding: 1%;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out; */
  }

  figure:hover > figcaption {
    /* background: rgba(0,0,0,1) */
  }

  .poetry pre {
    display: block;
    font-family: Georgia, Garamond, serif !important;
    font-size: 110% !important;
    font-style: italic;
    line-height: 1.6em;
    margin-left: 1em;
  }
  .poetry pre code {
    font-family: Georgia, Garamond, serif !important;
    word-break: break-all;
    word-break: break-word;
    /* Non standard for webkit */
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    white-space: pre-wrap;
  }

  blockquote p {
    font-size: 110%;
    font-style: italic;
    line-height: 1.6em;
  }

  sup,
  sub,
  a.footnote {
    font-size: 1.4ex;
    height: 0;
    line-height: 1;
    position: relative;
    vertical-align: super;
  }

  sub {
    vertical-align: sub;
    top: -1px;
  }

  p,
  h5 {
    font-size: 1em;
    line-height: 1.3125em;
    margin: 1.3125em 0;
  }

  dt,
  th {
    font-weight: 700;
  }

  table tr:nth-child(odd),
  table th:nth-child(odd),
  table td:nth-child(odd) {
    background: rgba(255, 255, 255, 0.06);
  }

  table tr:nth-child(even),
  table td:nth-child(even) {
    background: rgba(200, 200, 200, 0.25);
  }

  @media print {
    body {
      overflow: auto;
    }

    img,
    pre,
    blockquote,
    table,
    figure,
    p {
      page-break-inside: avoid;
    }

    #wrapper {
      background: white;
      color: #303030;
      font-size: 85%;
      padding: 10px;
      position: relative;
      text-indent: 0;
    }
  }
  @media screen {
    .inverted {
      background: #252a2a;
    }
    .inverted #wrapper {
      background: #252a2a;
      color: #eeeeee;
    }
    .inverted hr {
      border-color: #333f40 !important;
    }
    .inverted p,
    .inverted td,
    .inverted li,
    .inverted h1,
    .inverted h2,
    .inverted h3,
    .inverted h4,
    .inverted h5,
    .inverted h6,
    .inverted th,
    .inverted .math,
    .inverted caption,
    .inverted dt,
    .inverted dd {
      color: #eeeeee;
    }
    .inverted pre code {
      color: #111;
    }
    .inverted table {
      background: none;
    }
    .inverted table tr:nth-child(odd),
    .inverted table td:nth-child(odd) {
      background: none;
    }
    .inverted a {
      color: #acd1d5;
    }

    ::selection {
      background: rgba(157, 193, 200, 0.5);
    }

    h1::selection {
      background-color: rgba(45, 156, 208, 0.3);
    }

    h2::selection {
      background-color: rgba(90, 182, 224, 0.3);
    }

    h3::selection,
    h4::selection,
    h5::selection,
    h6::selection,
    li::selection,
    ol::selection {
      background-color: rgba(133, 201, 232, 0.3);
    }

    code::selection {
      background-color: rgba(0, 0, 0, 0.7);
      color: #eee;
    }

    code span::selection {
      background-color: rgba(0, 0, 0, 0.7) !important;
      color: #eee !important;
    }

    a::selection {
      background-color: rgba(255, 230, 102, 0.2);
    }

    .inverted a::selection {
      background-color: rgba(255, 230, 102, 0.6);
    }

    td::selection,
    th::selection,
    caption::selection {
      background-color: rgba(180, 237, 95, 0.5);
    }

    img {
      display: none;
    }
  }
`;
