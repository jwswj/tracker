class CreateExerciseUsers < ActiveRecord::Migration
  def up
    create_table :exercises_users, :id => false do |t|
      t.integer :user_id
      t.integer :exercise_id
    end
  end

  def down
    drop_table :exercises_users
  end
end
