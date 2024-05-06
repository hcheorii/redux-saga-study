import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchUsersReq } from "../reducers/user/action";
const Search = (props) => {
    const { userList = [], searchUsers } = props;

    //이름으로 검색을 할 예정
    const [name, setName] = useState("");
    console.log(props);
    return (
        <div>
            <div>
                <Link to="/">메인 페이지로</Link>
            </div>
            검색페이지
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={() => searchUsers(`?name=${name}`)}>
                    검색
                </button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        searchUsers: (params) => dispatch(searchUsersReq(params)),
    };
};
const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
