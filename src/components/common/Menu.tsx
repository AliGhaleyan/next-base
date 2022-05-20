import React, { FC, useEffect, useState } from "react";
import { Accordion, Collapse, Container, useAccordionButton } from "react-bootstrap";
import { Menu } from "../../data/models/menu.model";
import styles from "./Menu.module.scss";

enum MenuTitle {
    One,
    Two,
    Three,
    Four,
    Five
}

interface Props {
    onCollapse?: (status: boolean) => void,
}

const Menu: FC<Props> = ({ onCollapse }) => {
    const [key, setKey] = useState<MenuTitle | null>(null);
    const menus: Menu[] = [
        // {},
    ];

    useEffect(() => {
        if (onCollapse)
            onCollapse(key !== null);
    }, [key]);

    return (
        <div className={`${styles.menuContainer} mt-3 bg-white`} >
            <Container fluid className={styles.items} onMouseLeave={() => setKey(null)}>
                <div className={styles.list}>
                    <span onMouseEnter={() => setKey(MenuTitle.One)} className={[key == MenuTitle.One ? styles.activeItem : '', styles.item].join(" ")}>
                        <a href="#">منوی یک</a>
                    </span>
                    <span onMouseEnter={() => setKey(MenuTitle.Two)} className={[key == MenuTitle.Two ? styles.activeItem : '', styles.item].join(" ")}>
                        <a href="#">منوی دو</a>
                    </span>
                    {key == MenuTitle.One ?
                        <div className={styles.dropDown}>
                            <div>
                                hey you jack how are you today?
                            </div>
                        </div> : null}
                    {key == MenuTitle.Two ?
                        <div className={styles.dropDown}>
                            <div>
                                hey you jack how are you today?
                            </div>
                        </div> : null}
                </div>
            </Container>
        </div>
    );
};

export default Menu;