class FixActivitesColumnNames < ActiveRecord::Migration
  def change
    rename_column :activities, :user_exercise_id, :exercise_user_id
  end
end
