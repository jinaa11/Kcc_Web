<%@page import="kosa.dao.BoardDao2"%>
<%@page import="kosa.model.Board"%>
<%@page import="kosa.dao.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	int seq = Integer.parseInt(request.getParameter("seq"));
	BoardDao2 dao = BoardDao2.getInstance();
	Board board = dao.detailBoard(seq);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>글 세부 보기</h2>
	<ul>
		<li><%=board.getSeq()%></li>
		<li><%=board.getTitle()%></li>
		<li><%=board.getWriter()%></li>
		<li><%=board.getContents()%></li>
	</ul>
	<br>
	<br>

	<a href="updateForm.jsp?seq=<%=board.getSeq()%>">글 수정</a>
</body>
</html>