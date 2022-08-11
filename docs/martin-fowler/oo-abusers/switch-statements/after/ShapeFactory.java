package fowler.oo_abusers.switch_statements.after;

public class ShapeFactory {
	public Shape create(String shape, int size) throws Exception {
		if(shape.equalsIgnoreCase("triangle")) {
			return new Triangle(size);
		} else if (shape.equalsIgnoreCase("square")) {
			return new Square(size);
		}
		
		throw new Exception("invalid shape");
	}
}
