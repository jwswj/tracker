class RemoveIdFromUsersExercises < ActiveRecord::Migration
  def up
    remove_column :users_exercises, :id
  end

  def down
    add_column :users_exercises, :id
  end
end
