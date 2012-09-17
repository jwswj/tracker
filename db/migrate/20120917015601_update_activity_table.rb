class UpdateActivityTable < ActiveRecord::Migration
  def change
    rename_column :activities, :exercise_user_id, :exercise_id
    add_column :activities, :user_id, :integer, :null => false
  end
end
