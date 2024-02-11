import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const winScreen = ({ props }) => {

    return (
        <div>
            <h1>You Win!</h1>
            <Link to='/'>Go back Home</Link>
            <h1>Score</h1>
        </div>

    );
}

export default winScreen;