import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";

export function buildTestTemplate() {
  return new Document({
    creator: "PlanX",
    title: "A Test",
    styles: {
      paragraphStyles: [
        {
          id: "styled",
          name: "Styled",
          basedOn: "Text",
          next: "Text",
          quickFormat: true,
          run: {
            font: "Arial",
            size: 28,
            italics: false,
            bold: false,
            color: "000000",
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
      ],
    },
    sections: [
      {
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({
                text: "A Test",
                font: "Arial",
                bold: true,
                color: "000000",
                size: 54,
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: {
              after: 120,
            },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "This is a test document",
                font: "Arial",
                size: 32,
                color: "000000",
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: {
              before: 240,
              after: 120,
            },
          }),

          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "Test Doc Info",
                font: "Arial",
                bold: true,
                color: "000000",
                size: 32,
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: {
              before: 480,
              after: 240,
            },
          }),
          new Table({
            columnWidths: [4520, 4520],
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Did it work as expected?",
                            bold: true,
                          }),
                        ],
                        style: "styled",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "Yes/No",
                        style: "styled",
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Are you sure",
                            bold: true,
                          }),
                        ],
                        style: "styled",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({ text: "Yes/No", style: "styled" }),
                    ],
                  }),
                ],
              }),
            ],
            width: {
              size: 9040,
              type: WidthType.DXA,
            },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: "Another Section",
                font: "Arial",
                bold: true,
                color: "000000",
                size: 32,
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: {
              before: 480,
              after: 240,
            },
          }),
          new Table({
            columnWidths: [4520, 4520],
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Can it handle multiple sections?",
                            bold: true,
                          }),
                        ],
                        style: "styled",
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        text: "Yes/No",
                        style: "styled",
                      }),
                    ],
                  }),
                ],
              }),
            ],
            width: {
              size: 9040,
              type: WidthType.DXA,
            },
          }),
        ],
      },
    ],
  });
}
