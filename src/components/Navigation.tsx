import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const navItems: [string, string][] = [
  ["Expertise", "about"],           // scrolls to top section
  ["Career History", "history-projects"],
  ["Projects", "projects"], // same row, right column
  ["Contact", "contact"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar position="relative"  sx={{
    backgroundColor: "rgba(255,255,255,0.1", // dark header
    color: "#ffffff",
    boxShadow: "none",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  }}className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <Toolbar className="topbar__inner">
        <IconButton
          edge="start"
          className="topbar__menu"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <div className="topbar__links">
          {navItems.map(([label, id]) => (
            <Button key={id} onClick={() => scrollTo(id)}>{label}</Button>
          ))}
        </div>
      </Toolbar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {navItems.map(([label, id]) => (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={() => scrollTo(id)}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </AppBar>
  );
}
