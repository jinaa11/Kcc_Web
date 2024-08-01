package kosa.mapper;

import java.util.List;
import java.util.Map;

import kosa.model.Board;
import kosa.model.Search;

public interface BoardMapper {
//	List<Board> listBoard(Search search);
	List<Board> listBoard(Map map);
	Board detailBoard(int seq);
	int insertBoard(Board board);
	int updateBoard(Board board);
}
