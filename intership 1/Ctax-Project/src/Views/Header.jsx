import React from 'react'
import {Helmet} from "react-helmet";

function Header(){
    return (
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | CTax</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="A fully featured admin theme which can be used to build CRM, CMS, etc."
          />
          <meta name="author" content="Coderthemes" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    
          
    
          
          <link
            href="/assets/libs/flatpickr/flatpickr.min.css"
            rel="stylesheet"
            type="text/css"
          />
    
          
          <link
            href="/assets/css/bootstrap-purple.min.css"
            rel="stylesheet"
            type="text/css"
            id="bs-default-stylesheet"
          />
          <link
            href="/assets/css/app-purple.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-default-stylesheet"
          />
    
          <link
            href="/assets/css/bootstrap-purple-dark.min.css"
            rel="stylesheet"
            type="text/css"
            id="bs-dark-stylesheet"
            disabled="disabled"
          />
          <link
            href="/assets/css/app-purple-dark.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-dark-stylesheet"
            disabled="disabled"
          />
    
          
          <link
            href="/assets/css/icons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/Content/DataTables/jquery.dataTables.min.css"
            rel="stylesheet"
          />
    
          
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.datatables.net/buttons/2.3.5/css/buttons.dataTables.min.css"
          />
    
          
          <link href="/Content/css/sweetalert2.min.css" rel="stylesheet" />
          <link href="/Content/css/toastr.min.css" rel="stylesheet" />
          <link href="/Content/plugins/select2/select2.css" rel="stylesheet" />
    
          
        </Helmet>
      );
    

}

export default Header