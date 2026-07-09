export const manifest = {
  screens: {
    scr_relyzg: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_xnt7me: { name: "Showroom", route: "/showroom", position: { "x": 1560, "y": 220 } },
    scr_fyqppm: { name: "Gallery", route: "/gallery", position: { "x": 2960, "y": 220 } },
    scr_z4dbvc: { name: "Services", route: "/services", position: { "x": 4360, "y": 220 } },
    scr_qkkdk3: { name: "About Us", route: "/about", position: { "x": 5760, "y": 220 } },
    scr_ef8otz: { name: "Contact", route: "/contact", position: { "x": 7160, "y": 220 } }
  },
  sections: {
    sec_papx2t: { name: "Main Navigation", x: 0, y: 0, width: 8520, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_papx2t", children: [
    { kind: "screen", id: "scr_relyzg" },
    { kind: "screen", id: "scr_xnt7me" },
    { kind: "screen", id: "scr_fyqppm" },
    { kind: "screen", id: "scr_z4dbvc" },
    { kind: "screen", id: "scr_qkkdk3" },
    { kind: "screen", id: "scr_ef8otz" }]
  }]

};