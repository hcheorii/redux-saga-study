import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
    return (
        <div>
            <div>
                <Link to="/">메인 페이지로</Link>
            </div>
            검색페이지
            <div>
                <input />
                <button>검색</button>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>이메일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Search;
