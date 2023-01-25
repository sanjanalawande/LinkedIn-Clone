import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />

            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>

    )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
       {newsArticle("Inflation Cools, prices not so much", "Top News - 9000 readers")}
       {newsArticle("Tech Layoffs: USA updates", "Top News - 10000 readers")}
       {newsArticle("Google's New Office in Pune", "Top News - 100 readers")}
       {newsArticle("Corona Virus: USA updates", "Top News - 10000 readers")}
       {newsArticle("Remote Layoffs become harsh reality", "10000 readers")}
       {newsArticle("US workers are less engaged: Poll", "10890 readers")}
    </div>
     
  );
}

export default Widgets
