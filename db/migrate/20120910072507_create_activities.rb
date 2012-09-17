class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :description, :null => false
      t.integer :user_exercise_id, :null => false
      t.timestamps
    end
  end
end
