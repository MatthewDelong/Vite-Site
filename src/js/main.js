import '../scss/styles.scss';
import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });