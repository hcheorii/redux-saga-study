import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
    return (
        <div>
            <div>
                <Link to="/search">검색 페이지로</Link>
            </div>
            메인페이지
            <div>{"검색된 사용자 수 => " + 0}</div>
        </div>
    );
};
export default Main;
