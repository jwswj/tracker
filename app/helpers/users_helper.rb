module UsersHelper
  def join_exercises(user)
    user.exercises.map { |t| t.title }.join(", ")
  end
end
