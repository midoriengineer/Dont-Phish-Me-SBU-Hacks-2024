import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const loseScreen = ({ props }) => {
    return (
        <div>
            <h1>You Win!</h1>
            <Link to="/">Back Home</Link>
        </div>
    );
}

export default loseScreen;