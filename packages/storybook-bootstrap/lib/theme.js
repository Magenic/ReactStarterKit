import { create } from '@storybook/theming/create';
import logo from './assets/MGNC_Logo.svg'

export default create({
    base: "light",

    colorPrimary: "#78be43",
    colorSecondary: "#78be43",
    
    // UI
    appBg: '#f9f9f9',
    appContentBg: "#f9f9f9",
    appBorderColor: "#78be43",
   
    // Toolbar default and active colors
    barTextColor: "#63544f",
    barBg: "#ffffff",


    brandTitle: 'Express Scripts',
    brandUrl: 'http://localhost:3000/',
    brandImage: logo,
});