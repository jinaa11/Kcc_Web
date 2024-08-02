<%@page import="kosa.dao.MemberDao"%>
<%@page import="kosa.model.Member"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="member" class="kosa.model.Member"></jsp:useBean>
<jsp:setProperty property="*" name="member"/>
<%
	MemberDao dao = MemberDao.getInstance();
	int re = dao.insertMember(member);
	
	if(re == 1) {
		System.out.println(member);
	} else {
		out.println("실패");
	}
%>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
</head>
<body>
회원가입 완료
</body>
</html>