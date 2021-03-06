class CoffeeHouseDecorator < ApplicationDecorator
  delegate :id, :name, :latitude, :longitude, :address
  delegate :full_name, to: :owner, prefix: true

  decorates_association :owner
  decorates_association :coffees

  def description
    object.description&.html_safe
  end
end
