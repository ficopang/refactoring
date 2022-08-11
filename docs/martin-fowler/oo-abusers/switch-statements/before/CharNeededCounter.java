package fowler.oo_abusers.switch_statements.before;

public class CharNeededCounter {
	public int count(String shape, int size){
		if(shape.equalsIgnoreCase("square")){
			return size * size;
		} else if(shape.equalsIgnoreCase("triangle")){
			return ((size+1) * size) / 2;
		}
		
		return -1;
	}
}
