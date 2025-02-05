export interface File {
  id: string
  name: string
  type: "file" | "folder"
  url?: string
  parent: string | null
  size?: string
}

export const mockFiles: File[] = [
  {
    id: "1",
    name: "My Drive",
    type: "folder",
    parent: null,
  },
  {
    id: "2",
    name: "Documents",
    type: "folder",
    parent: "1",
  },
  {
    id: "3",
    name: "report.pdf",
    type: "file",
    parent: "2",
    url: "/report.pdf",
  },
  {
    id: "4",
    name: "Images",
    type: "folder",
    parent: "1",
  },
  {
    id: "5",
    name: "image1.jpg",
    type: "file",
    parent: "4",
    url: "/image1.jpg",
  },
  {
    id: "6",
    name: "image2.png",
    type: "file",
    parent: "4",
    url: "/image2.png",
  },
]

