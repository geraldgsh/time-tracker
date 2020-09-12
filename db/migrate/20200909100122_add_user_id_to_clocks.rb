class AddUserIdToClocks < ActiveRecord::Migration[6.0]
  def change
    add_reference :clocks, :user, null: false, foreign_key: true
  end
end
