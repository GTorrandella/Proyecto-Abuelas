import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
    getMultimedia,
} from '../../connector';
import SearchResultPage from '../../components/searchResultPage';
import { multimediaStyle } from '../../styles/multimedia';

export default function SearchPage() {

    return (
        <React.Fragment>
            <SearchResultPage />
        </React.Fragment>
    );
}