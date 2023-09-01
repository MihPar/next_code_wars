function solution(fullText, searchText){
	return fullText.split(searchText).length - 1;
  }
  console.log(solution('aa_bb_cc_dd_bb_e', 'bb'))
  